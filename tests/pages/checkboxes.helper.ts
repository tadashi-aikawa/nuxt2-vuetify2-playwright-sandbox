import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class CheckboxesPage extends BasePage {
  static path = "/checkboxes";

  get 左上のチェックボックス(): Locator {
    return this.page.getByLabel("左上");
  }
  get 右下のチェックボックス(): Locator {
    return this.page.getByLabel("右下");
  }
}
