import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { ComboboxPage } from "~/tests/pages/combobox.helper";

myTest("単一選択のコンボボックスにfirstが入っている", async ({ page }) => {
  const コンボボックス画面 = await ページを開く(page, ComboboxPage);
  await expect(コンボボックス画面.単一選択のコンボボックス).toHaveValue(
    "first"
  );
});

myTest("複数選択のコンボボックスに何も入っていない", async ({ page }) => {
  const コンボボックス画面 = await ページを開く(page, ComboboxPage);
  await expect(コンボボックス画面.複数選択のコンボボックス).toBeEmpty();
});

myTest("単一選択のコンボボックスをtwelveに変更する", async ({ page }) => {
  const コンボボックス画面 = await ページを開く(page, ComboboxPage);
  await コンボボックス画面.単一選択のコンボボックス.click();
  await コンボボックス画面.表示中のコンボボックス要素("twelve").click();
  await expect(コンボボックス画面.単一選択のコンボボックス).toHaveValue(
    "twelve"
  );
});

myTest(
  "複数選択のコンボボックスにfirst,fifth,tenを指定する",
  async ({ page }) => {
    const コンボボックス画面 = await ページを開く(page, ComboboxPage);
    await コンボボックス画面.複数選択のコンボボックス.click();
    await コンボボックス画面.表示中のコンボボックス要素("first").click();
    await コンボボックス画面.表示中のコンボボックス要素("fifth").click();
    await コンボボックス画面.表示中のコンボボックス要素("ten").click();
    await expect(
      コンボボックス画面.複数選択のコンボボックス値表示欄
    ).toHaveText("first, fifth, ten");
  }
);
