import { expect, test as base } from "@playwright/test";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "~/tests/env";
import { BottomNavigationPage } from "~/tests/pages/bottom-navigation.helper";

const test = base.extend<{ target: BottomNavigationPage }>({
  target: async ({ playwright }, use) =>
    use(
      new BottomNavigationPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            BottomNavigationPage.path
          ),
        })
      )
    ),
});

test("ボトムナビゲーションが表示されている", async ({ target }) => {
  await expect(target.ボトムナビゲーション).toHaveText(/あたり/);
});

test("あたりボタンに反応する", async ({ target }) => {
  await target.あたりボタン.click();
  await expect(target.選択したindexテキスト).toHaveText("1");
});
