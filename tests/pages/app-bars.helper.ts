import type { Locator, Page } from "@playwright/test";

export class AppBarsPage {
  constructor(public page: Page) {}

  static path = "/app-bars";

  get アプリケーションバー(): Locator {
    return this.page.getByTestId("app-bar");
  }
  get ハンバーガーメニューボタン() {
    return this.アプリケーションバー.getByTestId("hamburger-menu-button");
  }
}
