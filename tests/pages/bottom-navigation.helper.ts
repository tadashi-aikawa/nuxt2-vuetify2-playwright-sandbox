import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class BottomNavigationPage extends BasePage {
  static path = "/bottom-navigation";

  get ボトムナビゲーション(): Locator {
    return this.page.getByTestId("bottom-navigation");
  }
  get あたりボタン(): Locator {
    return this.ボトムナビゲーション.locator("button").getByText("あたり");
  }
  get 選択したindexテキスト(): Locator {
    return this.page.getByTestId("selected-index");
  }
}
