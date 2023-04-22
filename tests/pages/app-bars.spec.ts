import { expect } from "@playwright/test";
import { AppBarsPage } from "./app-bars.helper";
import { myTest, ページを開く } from "~/tests/page";

myTest("アプリケーションバーの表示を確認する", async ({ page }) => {
  const アプリケーションバー画面 = await ページを開く(page, AppBarsPage);
  await expect(アプリケーションバー画面.アプリケーションバー).toHaveText(
    "タイトル"
  );
});

myTest("ハンバーガーメニューボタンのクリックに反応する", async ({ page }) => {
  const アプリケーションバー画面 = await ページを開く(page, AppBarsPage);
  await アプリケーションバー画面.ハンバーガーメニューボタン.click();
  await expect(アプリケーションバー画面.アプリケーションバー).toHaveText(
    /クリック済/
  );
});
