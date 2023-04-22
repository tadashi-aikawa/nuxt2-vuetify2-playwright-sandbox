import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { CheckboxesPage } from "~/tests/pages/checkboxes.helper";

myTest("左上のチェックボックスにチェックがついてない", async ({ page }) => {
  const チェックボックス画面 = await ページを開く(page, CheckboxesPage);
  await expect(チェックボックス画面.左上のチェックボックス).toBeChecked({
    checked: false,
  });
});

myTest("右下のチェックボックスにチェックがついてない", async ({ page }) => {
  const チェックボックス画面 = await ページを開く(page, CheckboxesPage);
  await expect(チェックボックス画面.右下のチェックボックス).toBeChecked({
    checked: false,
  });
});

myTest(
  "左上のチェックボックスをクリックするとチェックがつく",
  async ({ page }) => {
    const チェックボックス画面 = await ページを開く(page, CheckboxesPage);
    await チェックボックス画面.左上のチェックボックス.click({ force: true }); // force: trueを指定しないと動かない
    await expect(チェックボックス画面.左上のチェックボックス).toBeChecked();
  }
);

myTest(
  "右下のチェックボックスをクリックするとチェックがつく",
  async ({ page }) => {
    const チェックボックス画面 = await ページを開く(page, CheckboxesPage);
    await チェックボックス画面.右下のチェックボックス.click({ force: true }); // force: trueを指定しないと動かない
    await expect(チェックボックス画面.右下のチェックボックス).toBeChecked();
  }
);
