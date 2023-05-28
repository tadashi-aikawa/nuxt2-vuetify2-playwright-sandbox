import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { SelectsPage } from "~/tests/pages/selects.helper";
import { assertLocatorsAsTexts } from "../utils";

myTest("単一選択テキストのセレクターにfirstが入っている", async ({ page }) => {
  const セレクター画面 = await ページを開く(page, SelectsPage);
  await expect(セレクター画面.単一選択テキストのセレクター.値).toHaveText(
    "first"
  );
});

myTest("単一選択テキストのセレクターをtwelveに変更する", async ({ page }) => {
  const セレクター画面 = await ページを開く(page, SelectsPage);
  await セレクター画面.単一選択テキストのセレクター.開閉ボタン.click();
  await セレクター画面.表示中のセレクター要素("twelve").click();
  await expect(セレクター画面.単一選択テキストのセレクター.値).toHaveText(
    "twelve"
  );
});

myTest("単一選択チップのセレクターをtwelveに変更する", async ({ page }) => {
  const セレクター画面 = await ページを開く(page, SelectsPage);
  await セレクター画面.単一選択チップのセレクター.開閉ボタン.click();
  await セレクター画面.表示中のセレクター要素("twelve").click();
  await expect(セレクター画面.単一選択チップのセレクター.値).toHaveText(
    "twelve"
  );
});

myTest("複数選択テキストのセレクターに何も入っていない", async ({ page }) => {
  const セレクター画面 = await ページを開く(page, SelectsPage);
  await assertLocatorsAsTexts(
    await セレクター画面.複数選択テキストのセレクター.値,
    []
  );
});

myTest(
  "複数選択テキストのセレクターにfirst,fifth,tenを指定する",
  async ({ page }) => {
    const セレクター画面 = await ページを開く(page, SelectsPage);
    await セレクター画面.複数選択テキストのセレクター.開閉ボタン.click();
    await セレクター画面.表示中のセレクター要素("first").click();
    await セレクター画面.表示中のセレクター要素("fifth").click();
    await セレクター画面.表示中のセレクター要素("ten").click();
    await セレクター画面.ESCを押す();

    await assertLocatorsAsTexts(
      await セレクター画面.複数選択テキストのセレクター.値,
      ["first", "fifth", "ten"],
      { trimDelimiter: true }
    );
  }
);

myTest(
  "複数選択チップのセレクターにfirst,fifthを指定する",
  async ({ page }) => {
    const セレクター画面 = await ページを開く(page, SelectsPage);

    await セレクター画面.複数選択チップのセレクター.開閉ボタン.click();
    await セレクター画面.表示中のセレクター要素("first").click();
    await セレクター画面.表示中のセレクター要素("fifth").click();
    await セレクター画面.ESCを押す();

    await assertLocatorsAsTexts(
      await セレクター画面.複数選択チップのセレクター.値,
      ["first", "fifth"],
      { trimDelimiter: true }
    );
  }
);
