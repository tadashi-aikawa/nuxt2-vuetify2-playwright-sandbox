import { BasePage } from "~/tests/page";

export class DatatablesPage extends BasePage {
  static path = "/data-tables";

  get フィルタ() {
    return this.page.getByLabel("Search");
  }

  get テーブル() {
    const outer = this.page.getByRole("table");
    return {
      /**
       * @param col 1から
       */
      ヘッダセル: (col: number) => outer.locator("th").nth(col - 1),
      /**
       * @param row 1から
       * @param col 1から
       */
      ボディセル: (row: number, col: number) =>
        outer
          .locator("tr")
          .nth(row)
          .locator("td")
          .nth(col - 1),
    };
  }

  get テーブルフッター() {
    const outer = this.page
      .locator(":below(table)")
      .getByText("Rows per page")
      .locator("xpath=..");

    return {
      カウンタ: () => outer.getByText(" of "),
    };
  }
}
