import type { Locator } from "@playwright/test";
import { BasePage } from "~/tests/page";

export class SelectsPage extends BasePage {
  static path = "/selects";

  get 単一選択のセレクター(): Locator {
    return this.page.getByLabel("単一選択");
  }
  get 単一選択のセレクター値表示欄(): Locator {
    // XXX: 構成に依存してしまうが他の特定方法が困難... クラス名指定よりはこちらの方がマシかもということで...
    return this.page
      .getByLabel("単一選択")
      .locator("..")
      .locator("div")
      .first();
  }

  get 複数選択のセレクター(): Locator {
    return this.page.getByLabel("複数選択");
  }
  get 複数選択のセレクター値表示欄(): Locator {
    // XXX: 構成に依存してしまうが他の特定方法が困難... クラス名指定よりはこちらの方がマシかもということで...
    return this.page.getByText("複数選択").locator("..").locator("div").first();
  }

  表示中のセレクター要素(text: string): Locator {
    // nativeの<select>は使われないので、roleで絞り込む
    return this.page.getByRole("listbox").getByRole("option").getByText(text);
  }
}
