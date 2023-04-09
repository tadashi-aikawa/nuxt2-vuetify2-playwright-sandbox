import type { Locator, Page } from "@playwright/test";

export class InputsPage {
  constructor(public page: Page) {}

  static path = "/inputs";

  get 入力欄(): Locator {
    return this.page.getByTestId("input");
  }
  get エラーアラート(): Locator {
    return this.page.getByRole("alert");
  }
}
