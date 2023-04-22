import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { BottomNavigationPage } from "~/tests/pages/bottom-navigation.helper";

myTest("ボトムナビゲーションが表示されている", async ({ page }) => {
  const ボトムナビゲーション画面 = await ページを開く(
    page,
    BottomNavigationPage
  );
  await expect(ボトムナビゲーション画面.ボトムナビゲーション).toHaveText(
    /あたり/
  );
});

myTest("あたりボタンに反応する", async ({ page }) => {
  const ボトムナビゲーション画面 = await ページを開く(
    page,
    BottomNavigationPage
  );
  await ボトムナビゲーション画面.あたりボタン.click();
  await expect(ボトムナビゲーション画面.選択したindexテキスト).toHaveText("1");
});
