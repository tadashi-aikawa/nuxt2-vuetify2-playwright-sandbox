import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class BottomSheetsPage extends BasePage {
  static path = "/bottom-sheets";

  get ボトムシートを開くボタン(): Locator {
    return this.page.getByText("ボトムシートを開く");
  }

  get ボトムシート(): Locator {
    return this.page.getByTestId("bottom-sheet");
  }
  get 閉じるボタン(): Locator {
    return this.ボトムシート.getByText("閉じる");
  }
  get ボトムシートコンテンツ(): Locator {
    return this.ボトムシート.getByTestId("bottom-sheet-content");
  }
}
