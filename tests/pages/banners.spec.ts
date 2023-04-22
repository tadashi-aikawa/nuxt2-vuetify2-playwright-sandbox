import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { BannersPage } from "~/tests/pages/banners.helper";

myTest("バナーが表示されている", async ({ page }) => {
  const バナー画面 = await ページを開く(page, BannersPage);
  await expect(バナー画面.バナー).toHaveText(
    /インターネットにつながっていません/
  );
});

myTest("アイコンクリックに反応する", async ({ page }) => {
  const バナー画面 = await ページを開く(page, BannersPage);
  await バナー画面.アイコン.click();
  await expect(バナー画面.バナー).toHaveText(/アイコンをクリックしました/);
});

myTest("再接続ボタンに反応する", async ({ page }) => {
  const バナー画面 = await ページを開く(page, BannersPage);
  await バナー画面.再接続ボタン.click();
  await expect(バナー画面.バナー).toHaveText(/再接続を試みました/);
});
