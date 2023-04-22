import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { RadioButtonsPage } from "~/tests/pages/radio-buttons.helper";

myTest("デフォルトでボタン2がアクティブ", async ({ page }) => {
  const ラジオボタン画面 = await ページを開く(page, RadioButtonsPage);
  await expect(ラジオボタン画面.ラジオボタン2).toBeChecked();
  await expect(ラジオボタン画面.ラジオボタン3).toBeChecked({ checked: false });
});

myTest("ボタン3をクリックするとボタン3がアクティブ", async ({ page }) => {
  const ラジオボタン画面 = await ページを開く(page, RadioButtonsPage);
  await ラジオボタン画面.ラジオボタン3.click({ force: true }); // force: trueを指定しないと動かない
  await expect(ラジオボタン画面.ラジオボタン3).toBeChecked();
  await expect(ラジオボタン画面.ラジオボタン2).toBeChecked({ checked: false });
});
