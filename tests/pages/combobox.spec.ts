import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { ComboboxPage } from "~/tests/pages/combobox.helper";
import { assertLocatorsAsTexts } from "~/tests/utils";

myTest(
  "単一選択テキストのコンボボックスにfirstが入っている",
  async ({ page }) => {
    const コンボボックス画面 = await ページを開く(page, ComboboxPage);
    await expect(
      コンボボックス画面.単一選択テキストのコンボボックス.値
    ).toHaveValue("first");
  }
);

myTest(
  "単一選択チップのコンボボックスにfirstが入っている",
  async ({ page }) => {
    const コンボボックス画面 = await ページを開く(page, ComboboxPage);
    await expect(
      コンボボックス画面.単一選択チップのコンボボックス.値
    ).toHaveText("first");
  }
);

myTest(
  "単一選択テキストのコンボボックスをtwelveに変更する",
  async ({ page }) => {
    const コンボボックス画面 = await ページを開く(page, ComboboxPage);

    await コンボボックス画面.単一選択テキストのコンボボックス.開閉ボタン.click();
    await コンボボックス画面.表示中のコンボボックス要素("twelve").click();

    await expect(
      コンボボックス画面.単一選択テキストのコンボボックス.値
    ).toHaveValue("twelve");
  }
);

myTest("単一選択チップのコンボボックスをtwelveに変更する", async ({ page }) => {
  const コンボボックス画面 = await ページを開く(page, ComboboxPage);

  await コンボボックス画面.単一選択チップのコンボボックス.開閉ボタン.click();
  await コンボボックス画面.表示中のコンボボックス要素("twelve").click();

  await expect(コンボボックス画面.単一選択チップのコンボボックス.値).toHaveText(
    "twelve"
  );
});

myTest(
  "単一選択テキストのコンボボックスに入力してフィルタリングしたものを選ぶ",
  async ({ page }) => {
    const コンボボックス画面 = await ページを開く(page, ComboboxPage);

    await コンボボックス画面.単一選択テキストのコンボボックス.開閉ボタン.click();
    await コンボボックス画面.単一選択テキストのコンボボックス.入力欄.fill(
      "fif"
    );
    await コンボボックス画面.表示中のコンボボックス要素("fifth").click();

    await expect(
      コンボボックス画面.単一選択テキストのコンボボックス.値
    ).toHaveValue("fifth");
  }
);

myTest(
  "単一選択チップのコンボボックスに入力してフィルタリングしたものを選ぶ",
  async ({ page }) => {
    const コンボボックス画面 = await ページを開く(page, ComboboxPage);

    await コンボボックス画面.単一選択チップのコンボボックス.開閉ボタン.click();
    await コンボボックス画面.単一選択チップのコンボボックス.入力欄.fill("fif");
    await コンボボックス画面.表示中のコンボボックス要素("fifth").click();

    await expect(
      コンボボックス画面.単一選択チップのコンボボックス.値
    ).toHaveText("fifth");
  }
);

myTest(
  "複数選択テキストのコンボボックスに何も入っていない",
  async ({ page }) => {
    const コンボボックス画面 = await ページを開く(page, ComboboxPage);
    await assertLocatorsAsTexts(
      await コンボボックス画面.複数選択テキストのコンボボックス.値,
      []
    );
  }
);

myTest(
  "複数選択テキストのコンボボックスにfirst,fifth,tenを指定する",
  async ({ page }) => {
    const コンボボックス画面 = await ページを開く(page, ComboboxPage);
    await コンボボックス画面.複数選択テキストのコンボボックス.開閉ボタン.click();
    await コンボボックス画面.表示中のコンボボックス要素("first").click();
    await コンボボックス画面.表示中のコンボボックス要素("fifth").click();
    await コンボボックス画面.複数選択テキストのコンボボックス.開閉ボタン.click();

    await コンボボックス画面.複数選択テキストのコンボボックス.開閉ボタン.click();
    await コンボボックス画面.表示中のコンボボックス要素("ten").click();
    await コンボボックス画面.ESCを押す();

    await assertLocatorsAsTexts(
      await コンボボックス画面.複数選択テキストのコンボボックス.値,
      ["first", "fifth", "ten"],
      { trimDelimiter: true }
    );
  }
);

myTest(
  "複数選択チップのコンボボックスに入力してフィルタリングしたものを選ぶ",
  async ({ page }) => {
    const コンボボックス画面 = await ページを開く(page, ComboboxPage);

    await コンボボックス画面.複数選択チップのコンボボックス.開閉ボタン.click();
    await コンボボックス画面.複数選択チップのコンボボックス.入力欄.fill("fi");
    await コンボボックス画面.表示中のコンボボックス要素("first").click();
    await コンボボックス画面.表示中のコンボボックス要素("fifth").click();
    await コンボボックス画面.ESCを押す();

    await assertLocatorsAsTexts(
      await コンボボックス画面.複数選択チップのコンボボックス.値,
      ["first", "fifth"],
      { trimDelimiter: true }
    );
  }
);
