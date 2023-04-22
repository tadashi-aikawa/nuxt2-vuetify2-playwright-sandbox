import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class ComboboxPage extends BasePage {
  static path = "/combobox";

  get 単一選択のコンボボックス(): Locator {
    return this.page.getByLabel("単一選択");
  }
  get 複数選択のコンボボックス(): Locator {
    return this.page.getByLabel("複数選択");
  }
  get 複数選択のコンボボックス値表示欄(): Locator {
    // XXX: 構成に依存してしまうが他の特定方法が困難... クラス名指定よりはこちらの方がマシかもということで...
    return this.page.getByText("複数選択").locator("..").locator("div").first();
  }

  表示中のコンボボックス要素(text: string): Locator {
    // nativeの<select>は使われないので、roleで絞り込む
    return this.page.getByRole("listbox").getByRole("option").getByText(text);
  }
}
