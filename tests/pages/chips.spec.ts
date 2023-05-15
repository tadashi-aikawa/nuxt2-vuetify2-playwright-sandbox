import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { ChipsPage } from "~/tests/pages/chips.helper";

myTest("チップにClosableと表示されている", async ({ page }) => {
  const チップ画面 = await ページを開く(page, ChipsPage);
  await expect(チップ画面.チップ).toHaveText("Closable");
});

myTest("チップのCloseボタンを押すと消える", async ({ page }) => {
  const チップ画面 = await ページを開く(page, ChipsPage);
  await チップ画面.チップのクローズボタン.click();
  await expect(チップ画面.チップ).toBeHidden();
});
