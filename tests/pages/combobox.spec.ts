import { expect, test as base } from "@playwright/test";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "~/tests/env";
import { ComboboxPage } from "~/tests/pages/combobox.helper";

const test = base.extend<{ target: ComboboxPage }>({
  target: async ({ playwright }, use) =>
    use(
      new ComboboxPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            ComboboxPage.path
          ),
        })
      )
    ),
});

test("単一選択のコンボボックスにfirstが入っている", async ({ target }) => {
  await expect(target.単一選択のコンボボックス).toHaveValue("first");
});

test("複数選択のコンボボックスに何も入っていない", async ({ target }) => {
  await expect(target.複数選択のコンボボックス).toBeEmpty();
});

test("単一選択のコンボボックスをtwelveに変更する", async ({ target }) => {
  await target.単一選択のコンボボックス.click();
  await target.表示中のコンボボックス要素("twelve").click();
  await expect(target.単一選択のコンボボックス).toHaveValue("twelve");
});

test("複数選択のコンボボックスにfirst,fifth,tenを指定する", async ({
  target,
}) => {
  await target.複数選択のコンボボックス.click();
  await target.表示中のコンボボックス要素("first").click();
  await target.表示中のコンボボックス要素("fifth").click();
  await target.表示中のコンボボックス要素("ten").click();
  await expect(target.複数選択のコンボボックス値表示欄).toHaveText(
    "first, fifth, ten"
  );
});
