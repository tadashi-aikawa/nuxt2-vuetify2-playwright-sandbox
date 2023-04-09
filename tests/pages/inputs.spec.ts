import { expect, test as base } from "@playwright/test";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "~/tests/env";
import { InputsPage } from "~/tests/pages/inputs.helper";

const test = base.extend<{ target: InputsPage }>({
  target: async ({ playwright }, use) =>
    use(
      new InputsPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            InputsPage.path
          ),
        })
      )
    ),
});

test("入力欄は空", async ({ target }) => {
  await expect(target.入力欄).toBeEmpty();
});

test("初期値が空でもエラーは出ない", async ({ target }) => {
  await expect(target.エラーアラート).toBeHidden();
});

test("一度文字を入力してから空にするとエラーが出る", async ({ target }) => {
  await target.入力欄.fill("hoge");
  await target.入力欄.fill("");
  await expect(target.エラーアラート).toBeVisible();
  await expect(target.エラーアラート).toHaveText("必須です");
});

test("20文字以内なら入力してもエラーは出ない", async ({ target }) => {
  await target.入力欄.fill("12345678901234567890");
  await expect(target.エラーアラート).toBeHidden();
});

test("21文字以上ならエラーが出る", async ({ target }) => {
  await target.入力欄.fill("123456789012345678901");
  await expect(target.入力欄).toHaveValue("123456789012345678901");
  await expect(target.エラーアラート).toBeVisible();
  await expect(target.エラーアラート).toHaveText("20文字を越えています");
});
