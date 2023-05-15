import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class ChipsPage extends BasePage {
  static path = "/chips";

  get チップ() {
    return this.page.getByTestId("chip");
  }
  get チップのクローズボタン(): Locator {
    return this.チップ.getByRole("button", { name: "Close" });
  }
}
