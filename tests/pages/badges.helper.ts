import type { Locator, Page } from "@playwright/test";

export class BadgesPage {
  constructor(public page: Page) {}

  static path = "/badges";

  get バッジ(): Locator {
    return this.page.getByTestId("badge").getByLabel("Badge");
  }
}
