import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

// XXX* spanタグやiタグに依存するLocatorが一部存在する
export class ComboboxPage extends BasePage {
  static path = "/combobox";

  表示中のコンボボックス要素(text: string): Locator {
    // nativeの<select>は使われないので、roleで絞り込む
    return this.page.getByRole("listbox").getByRole("option").getByText(text);
  }

  get 単一選択テキストのコンボボックス() {
    const combobox = this.page.getByRole("combobox");
    return {
      展開ボタン: combobox.filter({ hasText: "単一選択text" }).locator("i"),
      値: combobox.getByLabel("単一選択text"),
      入力欄: combobox.getByLabel("単一選択text"),
    };
  }

  get 単一選択チップのコンボボックス() {
    const combobox = this.page.getByRole("combobox");
    return {
      展開ボタン: combobox.filter({ hasText: "単一選択chips" }).locator("i"),
      値: combobox.locator(':below(:text("単一選択chips"))').first(),
      入力欄: combobox.getByLabel("単一選択chips"),
    };
  }

  get 複数選択テキストのコンボボックス() {
    const combobox = this.page.getByRole("combobox");
    return {
      展開ボタン: combobox.filter({ hasText: "複数選択text" }).locator("i"),
      値: combobox.locator(':below(:text("複数選択text")):left-of(i)').all(),
      入力欄: combobox.getByLabel("複数選択text"),
    };
  }

  get 複数選択チップのコンボボックス() {
    const combobox = this.page.getByRole("combobox");
    return {
      展開ボタン: combobox.filter({ hasText: "複数選択chips" }).locator("i"),
      値: combobox.locator('span:below(:text("複数選択chips"))').all(),
      入力欄: combobox.getByLabel("複数選択chips"),
    };
  }
}
