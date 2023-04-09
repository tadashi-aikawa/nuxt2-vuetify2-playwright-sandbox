import { expect, test as base } from "@playwright/test";
import { AppBarsPage } from "./app-bars.helper";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "~/tests/env";

const test = base.extend<{ target: AppBarsPage }>({
  target: async ({ playwright }, use) =>
    use(
      new AppBarsPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            AppBarsPage.path
          ),
        })
      )
    ),
});

test("アプリケーションバーの表示を確認する", async ({ target }) => {
  await expect(target.アプリケーションバー).toHaveText("タイトル");
});

test("ハンバーガーメニューボタンのクリックに反応する", async ({ target }) => {
  await target.ハンバーガーメニューボタン.click();
  await expect(target.アプリケーションバー).toHaveText(/クリック済/);
});
