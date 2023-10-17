import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class InputsPage extends BasePage {
  static path = "/inputs";

  get 入力欄(): Locator {
    return this.page.getByPlaceholder("20文字以内で必須");
  }
  get エラーアラート(): Locator {
    return this.page.getByRole("alert");
  }

  get singleLineの入力欄(): Locator {
    return this.page.getByTestId("single-line-text-field");

    // single-lineが有効だと入力後にラベルが消えるため、getByLabelで取得できなくなる
    // 未入力状態のときしかLocatorを取得できない
    // Placeholderを使った場合も同様のことは発生する
    // return this.page.getByLabel("single-lineが有効の場合");
  }
}
