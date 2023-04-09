import type { Locator, Page } from "@playwright/test";

export class CheckboxesPage {
  constructor(public page: Page) {}

  static path = "/checkboxes";

  get 左上のチェックボックス(): Locator {
    return this.page.getByLabel("左上");
  }
  get 右下のチェックボックス(): Locator {
    return this.page.getByLabel("右下");
  }
}
