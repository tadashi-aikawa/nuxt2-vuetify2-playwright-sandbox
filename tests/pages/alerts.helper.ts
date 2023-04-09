import type { Locator, Page } from "@playwright/test";

export class AlertsPage {
  constructor(public page: Page) {}

  static path = "/alerts";

  get アラート(): Locator {
    return this.page.getByTestId("alert");
  }
}
