import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class BadgesPage extends BasePage {
  static path = "/badges";

  get バッジ(): Locator {
    return this.page.getByTestId("badge").getByLabel("Badge");
  }
}
