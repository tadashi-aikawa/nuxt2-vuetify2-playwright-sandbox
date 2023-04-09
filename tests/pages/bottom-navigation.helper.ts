import type { Locator, Page } from "@playwright/test";

export class BottomNavigationPage {
  constructor(public page: Page) {}

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
