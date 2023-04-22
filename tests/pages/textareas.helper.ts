import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

// noinspection SpellCheckingInspection
export class TextareasPage extends BasePage {
  static path = "/textareas";

  get テキストエリア(): Locator {
    return this.page.getByLabel("テキスト入力欄");
  }
}
