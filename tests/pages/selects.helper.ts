import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

// XXX: iタグに依存するLocatorが一部存在する
export class SelectsPage extends BasePage {
  static path = "/selects";

  表示中のセレクター要素(text: string): Locator {
    // nativeの<select>は使われないので、roleで絞り込む
    return this.page.getByRole("listbox").getByRole("option").getByText(text);
  }

  get 単一選択テキストのセレクター() {
    const select = this.page.getByRole("button", { name: "単一選択text" });
    return {
      開閉ボタン: select.locator("i"),
      値: select.locator(':below(:text("単一選択text"))').first(),
    };
  }

  get 単一選択チップのセレクター() {
    const select = this.page.getByRole("button", { name: "単一選択chip" });
    return {
      開閉ボタン: select.locator("i"),
      値: select.locator(':below(:text("単一選択chip"))').first(),
    };
  }

  get 複数選択テキストのセレクター() {
    const select = this.page.getByRole("button", { name: "複数選択text" });
    return {
      開閉ボタン: select.locator("i"),
      値: select.locator(':below(:text("複数選択text")):left-of(i)').all(),
    };
  }

  get 複数選択チップのセレクター() {
    const select = this.page.getByRole("button", { name: "複数選択chips" });
    return {
      開閉ボタン: select.filter({ hasText: "複数選択chips" }).locator("i"),
      値: select
        .locator(':below(:text("複数選択chips"))')
        .filter({ hasText: /.+/ })
        .all(),
    };
  }
}
