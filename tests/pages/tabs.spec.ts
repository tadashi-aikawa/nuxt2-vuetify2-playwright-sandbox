import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { TabsPage } from "~/tests/pages/tabs.helper";

myTest("タブをクリックするとコンテンツが変わる", async ({ page }) => {
  const タブ画面 = await ページを開く(page, TabsPage);

  await タブ画面.タブ("two").click();

  await expect(タブ画面.コンテンツ("one")).toBeHidden();
  await expect(タブ画面.コンテンツ("two")).toBeVisible();

  await タブ画面.タブ("three").click();
  await expect(タブ画面.コンテンツ("two")).toBeHidden();
  await expect(タブ画面.コンテンツ("three")).toBeVisible();
  await expect(タブ画面.コンテンツ("three")).toHaveText("日本語だと三");
});
