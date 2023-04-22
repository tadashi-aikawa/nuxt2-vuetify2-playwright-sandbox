import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class BannersPage extends BasePage {
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
