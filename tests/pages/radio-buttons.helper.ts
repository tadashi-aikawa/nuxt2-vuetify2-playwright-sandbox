import type { Locator, Page } from "@playwright/test";

export class RadioButtonsPage {
  constructor(public page: Page) {}

  static path = "/radio-buttons";

  get ラジオボタン2(): Locator {
    return this.page.getByLabel("ボタン2");
  }
  get ラジオボタン3(): Locator {
    return this.page.getByLabel("ボタン3");
  }
}
