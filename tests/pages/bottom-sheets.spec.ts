import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { BottomSheetsPage } from "~/tests/pages/bottom-sheets.helper";

myTest("初期状態ではボトムシートが表示されていない", async ({ page }) => {
  const ボトムシート画面 = await ページを開く(page, BottomSheetsPage);
  await expect(ボトムシート画面.ボトムシート).toBeHidden();
});

myTest(
  "ボトムシートを開くボタンを押すとボトムシートが表示される",
  async ({ page }) => {
    const ボトムシート画面 = await ページを開く(page, BottomSheetsPage);
    await ボトムシート画面.ボトムシートを開くボタン.click();
    await expect(ボトムシート画面.ボトムシート).toBeVisible();
    await expect(ボトムシート画面.ボトムシートコンテンツ).toHaveText(
      "ボトムシートです"
    );
  }
);

myTest("ボトムシート内の閉じるボタンが反応する", async ({ page }) => {
  const ボトムシート画面 = await ページを開く(page, BottomSheetsPage);
  await ボトムシート画面.ボトムシートを開くボタン.click();
  await ボトムシート画面.閉じるボタン.click();
  await expect(ボトムシート画面.ボトムシート).toBeHidden();
});
