import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class AppBarsPage extends BasePage {
  static path = "/app-bars";

  get アプリケーションバー(): Locator {
    return this.page.getByTestId("app-bar");
  }
  get ハンバーガーメニューボタン() {
    return this.アプリケーションバー.getByTestId("hamburger-menu-button");
  }
}
