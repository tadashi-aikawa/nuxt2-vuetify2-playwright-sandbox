import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { ButtonsPage } from "~/tests/pages/buttons.helper";

myTest("ボタンをクリックするとボタンが無効になる", async ({ page }) => {
  const ボタン画面 = await ページを開く(page, ButtonsPage);

  await expect(ボタン画面.押すと無効になるボタン).toBeEnabled();

  await ボタン画面.押すと無効になるボタン.click();

  await expect(ボタン画面.押すと無効になるボタン).toBeDisabled();
});

myTest("ボタンをクリックするとダウンロードできる", async ({ page }) => {
  const ボタン画面 = await ページを開く(page, ButtonsPage);

  await ボタン画面.クリックしてダウンロードしたファイルと中身が同一のファイルであることを確認(
    ボタン画面.あるファイルをダウンロードボタン,
    "tests/golden/buttons1.md"
  );
});
