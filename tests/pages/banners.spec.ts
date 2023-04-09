import { expect, test as base } from "@playwright/test";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "~/tests/env";
import { BannersPage } from "~/tests/pages/banners.helper";

const test = base.extend<{ target: BannersPage }>({
  target: async ({ playwright }, use) =>
    use(
      new BannersPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            BannersPage.path
          ),
        })
      )
    ),
});

test("バナーが表示されている", async ({ target }) => {
  await expect(target.バナー).toHaveText(/インターネットにつながっていません/);
});

test("アイコンクリックに反応する", async ({ target }) => {
  await target.アイコン.click();
  await expect(target.バナー).toHaveText(/アイコンをクリックしました/);
});

test("再接続ボタンに反応する", async ({ target }) => {
  await target.再接続ボタン.click();
  await expect(target.バナー).toHaveText(/再接続を試みました/);
});
