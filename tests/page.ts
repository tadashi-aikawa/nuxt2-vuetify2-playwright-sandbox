import { expect, Locator, Page, test } from "@playwright/test";
import { getBaseUrl } from "./env";
import { createQueryString } from "./utils";
import * as fs from "fs";

interface ConstructorWithArg<T, A> {
  new (arg: A): T;
}

export async function createPage(
  playwright: typeof import("playwright-core"),
  option?: {
    slowMo?: number;
    width?: number;
    height?: number;
  }
): Promise<Page> {
  const browser = await playwright["chromium"].launch({
    slowMo: option?.slowMo ?? 200,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.setViewportSize({
    width: option?.width ?? 1920,
    height: option?.height ?? 900,
  });

  return page;
}

export async function ページを開く<P extends typeof BasePage>(
  page: Page,
  dstPageClass: P,
  query?: { [key: string]: string | number }
): Promise<InstanceType<P>> {
  const p = new dstPageClass(page);
  await page.goto(
    `${getBaseUrl()}${dstPageClass.path}${createQueryString(query)}`
  );
  return p as InstanceType<P>;
}

export class BasePage {
  constructor(public readonly page: Page) {}

  static path: string;

  async 別のページを開く<P extends typeof BasePage>(
    dstPageClass: P,
    query?: { [key: string]: string | number }
  ): Promise<InstanceType<P>> {
    return ページを開く(this.page, dstPageClass, query);
  }

  ダイアログはすべてOKをクリックして即座に閉じるようにする() {
    this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
  }

  async クリックしてダウンロード(locator: Locator) {
    const downloadPromise = this.page.waitForEvent("download");
    await locator.click();
    const download = await downloadPromise;
    return download.path();
  }

  async クリックしてダウンロードしたファイルと中身が同一のファイルであることを確認(
    locator: Locator,
    path: string
  ): Promise<void> {
    const downloadPromise = this.page.waitForEvent("download");

    await locator.click();
    const download = await downloadPromise;

    const downloadPath = String(Number(new Date()));
    await download.saveAs(downloadPath);

    const [oneBody, anotherBody] = await Promise.all([
      fs.promises.readFile(downloadPath),
      fs.promises.readFile(path),
    ]).then(([oneBuf, anotherBuf]) => [
      new TextDecoder().decode(oneBuf),
      new TextDecoder().decode(anotherBuf),
    ]);
    await fs.promises.rm(downloadPath);

    await expect(oneBody).toEqual(anotherBody);
  }


  async aタグの_blankは無視してクリック<T, A>(
    nextPageClass: ConstructorWithArg<A, Page>,
    locator: Locator
  ) {
    const pagePromise = this.page.context().waitForEvent("page");
    await locator.click();
    const newPage = await pagePromise;
    return new nextPageClass(newPage);
  }

  async 次のページが表示されていることを確認<T extends typeof BasePage>(
    pageClass: T
  ): Promise<void> {
    await expect(this.page).toHaveURL(
      new RegExp(`${getBaseUrl()}${pageClass.path}($|\\?.+$)`)
    );
  }
}

export const myTest = test.extend<{ page: Page }>({
  page: async ({ playwright }, use) => {
    await use(await createPage(playwright));
  },
});
