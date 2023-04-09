import { expect, test as base } from "@playwright/test";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "~/tests/env";
import { CheckboxesPage } from "~/tests/pages/checkboxes.helper";

const test = base.extend<{ target: CheckboxesPage }>({
  target: async ({ playwright }, use) =>
    use(
      new CheckboxesPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            CheckboxesPage.path
          ),
        })
      )
    ),
});

test("左上のチェックボックスにチェックがついてない", async ({ target }) => {
  await expect(target.左上のチェックボックス).toBeChecked({ checked: false });
});

test("右下のチェックボックスにチェックがついてない", async ({ target }) => {
  await expect(target.右下のチェックボックス).toBeChecked({ checked: false });
});

test("左上のチェックボックスをクリックするとチェックがつく", async ({
  target,
}) => {
  await target.左上のチェックボックス.click({ force: true }); // force: trueを指定しないと動かない
  await expect(target.左上のチェックボックス).toBeChecked();
});

test("右下のチェックボックスをクリックするとチェックがつく", async ({
  target,
}) => {
  await target.右下のチェックボックス.click({ force: true }); // force: trueを指定しないと動かない
  await expect(target.右下のチェックボックス).toBeChecked();
});
