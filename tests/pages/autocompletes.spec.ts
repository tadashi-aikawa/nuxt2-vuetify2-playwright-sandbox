import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { AutocompletesPage } from "~/tests/pages/autocompletes.helper";
import { assertLocatorsAsTexts } from "~/tests/utils";

myTest(
  "単一選択テキストのオートコンプリートにfirstが入っている",
  async ({ page }) => {
    const オートコンプリート画面 = await ページを開く(page, AutocompletesPage);
    await expect(
      オートコンプリート画面.単一選択テキストのオートコンプリート.値
    ).toHaveValue("first");
  }
);

myTest(
  "単一選択チップのオートコンプリートにfirstが入っている",
  async ({ page }) => {
    const オートコンプリート画面 = await ページを開く(page, AutocompletesPage);
    await expect(
      オートコンプリート画面.単一選択チップのオートコンプリート.値
    ).toHaveText("first");
  }
);

myTest(
  "単一選択テキストのオートコンプリートをtwelveに変更する",
  async ({ page }) => {
    const オートコンプリート画面 = await ページを開く(page, AutocompletesPage);

    await オートコンプリート画面.単一選択テキストのオートコンプリート.開閉ボタン.click();
    await オートコンプリート画面
      .表示中のオートコンプリート要素("twelve")
      .click();

    await expect(
      オートコンプリート画面.単一選択テキストのオートコンプリート.値
    ).toHaveValue("twelve");
  }
);

myTest(
  "単一選択チップのオートコンプリートをtwelveに変更する",
  async ({ page }) => {
    const オートコンプリート画面 = await ページを開く(page, AutocompletesPage);

    await オートコンプリート画面.単一選択チップのオートコンプリート.開閉ボタン.click();
    await オートコンプリート画面
      .表示中のオートコンプリート要素("twelve")
      .click();

    await expect(
      オートコンプリート画面.単一選択チップのオートコンプリート.値
    ).toHaveText("twelve");
  }
);

myTest(
  "単一選択テキストのオートコンプリートに入力してフィルタリングしたものを選ぶ",
  async ({ page }) => {
    const オートコンプリート画面 = await ページを開く(page, AutocompletesPage);

    await オートコンプリート画面.単一選択テキストのオートコンプリート.開閉ボタン.click();
    await オートコンプリート画面.単一選択テキストのオートコンプリート.入力欄.fill(
      "fif"
    );
    await オートコンプリート画面
      .表示中のオートコンプリート要素("fifth")
      .click();

    await expect(
      オートコンプリート画面.単一選択テキストのオートコンプリート.値
    ).toHaveValue("fifth");
  }
);

myTest(
  "単一選択チップのオートコンプリートに入力してフィルタリングしたものを選ぶ",
  async ({ page }) => {
    const オートコンプリート画面 = await ページを開く(page, AutocompletesPage);

    await オートコンプリート画面.単一選択チップのオートコンプリート.開閉ボタン.click();
    await オートコンプリート画面.単一選択チップのオートコンプリート.入力欄.fill(
      "fif"
    );
    await オートコンプリート画面
      .表示中のオートコンプリート要素("fifth")
      .click();

    await expect(
      オートコンプリート画面.単一選択チップのオートコンプリート.値
    ).toHaveText("fifth");
  }
);

myTest(
  "複数選択テキストのオートコンプリートに何も入っていない",
  async ({ page }) => {
    const オートコンプリート画面 = await ページを開く(page, AutocompletesPage);
    await assertLocatorsAsTexts(
      await オートコンプリート画面.複数選択テキストのオートコンプリート.値,
      []
    );
  }
);

myTest(
  "複数選択テキストのオートコンプリートにfirst,fifth,tenを指定する",
  async ({ page }) => {
    const オートコンプリート画面 = await ページを開く(page, AutocompletesPage);
    await オートコンプリート画面.複数選択テキストのオートコンプリート.開閉ボタン.click();
    await オートコンプリート画面
      .表示中のオートコンプリート要素("first")
      .click();
    await オートコンプリート画面
      .表示中のオートコンプリート要素("fifth")
      .click();
    await オートコンプリート画面.複数選択テキストのオートコンプリート.開閉ボタン.click();

    await オートコンプリート画面.複数選択テキストのオートコンプリート.開閉ボタン.click();
    await オートコンプリート画面.表示中のオートコンプリート要素("ten").click();
    await オートコンプリート画面.ESCを押す();

    await assertLocatorsAsTexts(
      await オートコンプリート画面.複数選択テキストのオートコンプリート.値,
      ["first", "fifth", "ten"],
      { trimDelimiter: true }
    );
  }
);

myTest(
  "複数選択チップのオートコンプリートに入力してフィルタリングしたものを選ぶ",
  async ({ page }) => {
    const オートコンプリート画面 = await ページを開く(page, AutocompletesPage);

    await オートコンプリート画面.複数選択チップのオートコンプリート.開閉ボタン.click();
    await オートコンプリート画面.複数選択チップのオートコンプリート.入力欄.fill(
      "fi"
    );
    await オートコンプリート画面
      .表示中のオートコンプリート要素("first")
      .click();
    await オートコンプリート画面
      .表示中のオートコンプリート要素("fifth")
      .click();
    await オートコンプリート画面.ESCを押す();

    await assertLocatorsAsTexts(
      await オートコンプリート画面.複数選択チップのオートコンプリート.値,
      ["first", "fifth"],
      { trimDelimiter: true }
    );
  }
);
