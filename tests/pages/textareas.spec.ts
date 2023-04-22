import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { TextareasPage } from "~/tests/pages/textareas.helper";

myTest("テキストエリアに入力できる", async ({ page }) => {
  const テキストエリア画面 = await ページを開く(page, TextareasPage);
  await expect(テキストエリア画面.テキストエリア).toBeEmpty();

  await テキストエリア画面.テキストエリア.fill(`hoge
  hoge`);
  await expect(テキストエリア画面.テキストエリア).toHaveValue(`hoge
  hoge`);
});
