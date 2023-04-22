import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class ButtonsPage extends BasePage {
  static path = "/buttons";

  get 押すと無効になるボタン(): Locator {
    return this.page.getByRole("button").getByText("押すと無効になる");
  }
}
