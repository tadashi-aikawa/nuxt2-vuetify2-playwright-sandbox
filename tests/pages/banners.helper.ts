import type { Locator, Page } from "@playwright/test";

export class BannersPage {
  constructor(public page: Page) {}

  static path = "/banners";

  get バナー(): Locator {
    return this.page.getByTestId("banner");
  }
  get アイコン(): Locator {
    return this.バナー.getByTestId("icon");
  }
  get 再接続ボタン() {
    return this.バナー.getByText("再接続");
  }
}
