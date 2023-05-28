import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

// XXX: iタグに依存するLocatorが一部存在する
export class AutocompletesPage extends BasePage {
  static path = "/autocompletes";

  表示中のオートコンプリート要素(text: string): Locator {
    // nativeの<select>は使われないので、roleで絞り込む
    return this.page.getByRole("listbox").getByRole("option").getByText(text);
  }

  get 単一選択テキストのオートコンプリート() {
    const autocomplete = this.page.getByRole("combobox");
    return {
      開閉ボタン: autocomplete.filter({ hasText: "単一選択text" }).locator("i"),
      値: autocomplete.getByLabel("単一選択text"),
      入力欄: autocomplete.getByLabel("単一選択text"),
    };
  }

  get 単一選択チップのオートコンプリート() {
    const autocomplete = this.page.getByRole("combobox");
    return {
      開閉ボタン: autocomplete
        .filter({ hasText: "単一選択chips" })
        .locator("i"),
      値: autocomplete.locator(':below(:text("単一選択chips"))').first(),
      入力欄: autocomplete.getByLabel("単一選択chips"),
    };
  }

  get 複数選択テキストのオートコンプリート() {
    const autocomplete = this.page.getByRole("combobox");
    return {
      開閉ボタン: autocomplete.filter({ hasText: "複数選択text" }).locator("i"),
      値: autocomplete
        .locator(':below(:text("複数選択text")):left-of(i)')
        .all(),
      入力欄: autocomplete.getByLabel("複数選択text"),
    };
  }

  get 複数選択チップのオートコンプリート() {
    const autocomplete = this.page.getByRole("combobox");
    return {
      開閉ボタン: autocomplete
        .filter({ hasText: "複数選択chips" })
        .locator("i"),
      値: autocomplete
        .locator(':below(:text("複数選択chips"))')
        .filter({ hasText: /.+/ })
        .all(),
      入力欄: autocomplete.getByLabel("複数選択chips"),
    };
  }
}
