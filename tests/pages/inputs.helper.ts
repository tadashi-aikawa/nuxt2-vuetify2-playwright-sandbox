import type { Locator, Page } from "@playwright/test";

export class InputsPage {
  constructor(public page: Page) {}

  static path = "/inputs";

  get 入力欄(): Locator {
    return this.page.getByPlaceholder("20文字以内で必須");
  }
  get エラーアラート(): Locator {
    return this.page.getByRole("alert");
  }
}
