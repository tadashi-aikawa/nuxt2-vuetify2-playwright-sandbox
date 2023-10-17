import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { InputsPage } from "~/tests/pages/inputs.helper";

myTest("入力欄は空", async ({ page }) => {
  const 入力画面 = await ページを開く(page, InputsPage);
  await expect(入力画面.入力欄).toBeEmpty();
});

myTest("初期値が空でもエラーは出ない", async ({ page }) => {
  const 入力画面 = await ページを開く(page, InputsPage);
  await expect(入力画面.エラーアラート).toBeHidden();
});

myTest("入力した文字列を確認する", async ({ page }) => {
  const 入力画面 = await ページを開く(page, InputsPage);
  await 入力画面.入力欄.fill("hoge");
  await expect(入力画面.入力欄).toHaveValue("hoge");
});

myTest("一度文字を入力してから空にするとエラーが出る", async ({ page }) => {
  const 入力画面 = await ページを開く(page, InputsPage);
  await 入力画面.入力欄.fill("hoge");
  await 入力画面.入力欄.fill("");
  await expect(入力画面.エラーアラート).toBeVisible();
  await expect(入力画面.エラーアラート).toHaveText("必須です");
});

myTest("20文字以内なら入力してもエラーは出ない", async ({ page }) => {
  const 入力画面 = await ページを開く(page, InputsPage);
  await 入力画面.入力欄.fill("12345678901234567890");
  await expect(入力画面.エラーアラート).toBeHidden();
});

myTest("21文字以上ならエラーが出る", async ({ page }) => {
  const 入力画面 = await ページを開く(page, InputsPage);
  await 入力画面.入力欄.fill("123456789012345678901");
  await expect(入力画面.入力欄).toHaveValue("123456789012345678901");
  await expect(入力画面.エラーアラート).toBeVisible();
  await expect(入力画面.エラーアラート).toHaveText("20文字を越えています");
});

myTest("single-lineの項目に入力", async ({ page }) => {
  const 入力画面 = await ページを開く(page, InputsPage);
  await 入力画面.singleLineの入力欄.fill("fuga");
  await expect(入力画面.singleLineの入力欄).toHaveValue("fuga");
});
