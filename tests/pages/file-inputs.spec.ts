import { myTest, ページを開く } from "~/tests/page";
import { FileInputsPage } from "~/tests/pages/file-inputs.helper";
import { expect } from "@playwright/test";

myTest("ファイルを指定できる", async ({ page }) => {
  const ファイル入力画面 = await ページを開く(page, FileInputsPage);
  await ファイル入力画面.クリックしてファイルを指定(
    ファイル入力画面.アップロード指定エリア,
    "tests/testdata/file-inputs1.md"
  );

  // valueは C:\\fakepath のような仮のパスprefixが指定されるため後方一致で判定する
  await expect(ファイル入力画面.アップロード指定エリア).toHaveValue(
    /file-inputs1.md$/
  );
});
