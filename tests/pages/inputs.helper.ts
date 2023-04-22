import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class InputsPage extends BasePage {
  static path = "/inputs";

  get 入力欄(): Locator {
    return this.page.getByPlaceholder("20文字以内で必須");
  }
  get エラーアラート(): Locator {
    return this.page.getByRole("alert");
  }
}
