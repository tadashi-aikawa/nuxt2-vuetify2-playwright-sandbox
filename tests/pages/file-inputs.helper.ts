import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class FileInputsPage extends BasePage {
  static path = "/file-inputs";

  get アップロード指定エリア(): Locator {
    // getByLabelではViewport外のエラーになる
    return this.page.getByText("アップロードするファイルを指定してね");
  }
}
