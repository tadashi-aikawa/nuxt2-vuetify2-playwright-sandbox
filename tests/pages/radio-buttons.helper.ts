import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class RadioButtonsPage extends BasePage {
  static path = "/radio-buttons";

  get ラジオボタン2(): Locator {
    return this.page.getByLabel("ボタン2");
  }
  get ラジオボタン3(): Locator {
    return this.page.getByLabel("ボタン3");
  }
}
