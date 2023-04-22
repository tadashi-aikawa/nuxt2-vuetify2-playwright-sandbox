import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class AlertsPage extends BasePage {
  static path = "/alerts";

  get アラート(): Locator {
    return this.page.getByTestId("alert");
  }
}
