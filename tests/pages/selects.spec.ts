import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { SelectsPage } from "~/tests/pages/selects.helper";

myTest("単一選択のセレクターにfirstが入っている", async ({ page }) => {
  const セレクター画面 = await ページを開く(page, SelectsPage);
  await expect(セレクター画面.単一選択のセレクター値表示欄).toHaveText("first");
});

myTest("複数選択のセレクターに何も入っていない", async ({ page }) => {
  const セレクター画面 = await ページを開く(page, SelectsPage);
  await expect(セレクター画面.複数選択のセレクター).toBeEmpty();
});

myTest("単一選択のセレクターをtwelveに変更する", async ({ page }) => {
  const セレクター画面 = await ページを開く(page, SelectsPage);
  await セレクター画面.単一選択のセレクター.click();
  await セレクター画面.表示中のセレクター要素("twelve").click();
  await expect(セレクター画面.単一選択のセレクター値表示欄).toHaveText(
    "twelve"
  );
});

myTest("複数選択のセレクターにfirst,fifth,tenを指定する", async ({ page }) => {
  const セレクター画面 = await ページを開く(page, SelectsPage);
  await セレクター画面.複数選択のセレクター.click();
  await セレクター画面.表示中のセレクター要素("first").click();
  await セレクター画面.表示中のセレクター要素("fifth").click();
  await セレクター画面.表示中のセレクター要素("ten").click();
  await expect(セレクター画面.複数選択のセレクター値表示欄).toHaveText(
    "first, fifth, ten"
  );
});
