import { expect, test as base } from "@playwright/test";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "~/tests/env";
import { BottomSheetsPage } from "~/tests/pages/bottom-sheets.helper";

const test = base.extend<{ target: BottomSheetsPage }>({
  target: async ({ playwright }, use) =>
    use(
      new BottomSheetsPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            BottomSheetsPage.path
          ),
        })
      )
    ),
});

test("初期状態ではボトムシートが表示されていない", async ({ target }) => {
  await expect(target.ボトムシート).toBeHidden();
});

test("ボトムシートを開くボタンを押すとボトムシートが表示される", async ({
  target,
}) => {
  await target.ボトムシートを開くボタン.click();
  await expect(target.ボトムシート).toBeVisible();
  await expect(target.ボトムシートコンテンツ).toHaveText("ボトムシートです");
});

test("ボトムシート内の閉じるボタンが反応する", async ({ target }) => {
  await target.ボトムシートを開くボタン.click();
  await target.閉じるボタン.click();
  await expect(target.ボトムシート).toBeHidden();
});
