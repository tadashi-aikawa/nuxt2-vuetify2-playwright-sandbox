import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { DatatablesPage } from "~/tests/pages/data-tables.helper";

myTest("テーブルの指定したセルに値が入っている", async ({ page }) => {
  const テーブル画面 = await ページを開く(page, DatatablesPage);

  await expect(テーブル画面.テーブル.ヘッダセル(1)).toHaveText("ID");
  await expect(テーブル画面.テーブル.ボディセル(2, 3)).toHaveText(
    "kotatsu,fish"
  );
  await expect(テーブル画面.テーブル.ボディセル(3, 2)).toHaveText("human");
});

myTest("テーブルをフィルタリングできる", async ({ page }) => {
  const テーブル画面 = await ページを開く(page, DatatablesPage);

  await テーブル画面.フィルタ.fill("cat");

  await expect(テーブル画面.テーブル.ヘッダセル(1)).toHaveText("ID");
  await expect(テーブル画面.テーブル.ボディセル(1, 2)).toHaveText("cat");
  await expect(テーブル画面.テーブルフッター.カウンタ()).toHaveText("1-1 of 1");
});
