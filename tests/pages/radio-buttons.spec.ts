import { expect, test as base } from "@playwright/test";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "~/tests/env";
import { RadioButtonsPage } from "~/tests/pages/radio-buttons.helper";

const test = base.extend<{ target: RadioButtonsPage }>({
  target: async ({ playwright }, use) =>
    use(
      new RadioButtonsPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            RadioButtonsPage.path
          ),
        })
      )
    ),
});

test("デフォルトでボタン2がアクティブ", async ({ target }) => {
  await expect(target.ラジオボタン2).toBeChecked();
  await expect(target.ラジオボタン3).toBeChecked({ checked: false });
});

test("ボタン3をクリックするとボタン3がアクティブ", async ({ target }) => {
  await target.ラジオボタン3.click({ force: true }); // force: trueを指定しないと動かない
  await expect(target.ラジオボタン3).toBeChecked();
  await expect(target.ラジオボタン2).toBeChecked({ checked: false });
});
