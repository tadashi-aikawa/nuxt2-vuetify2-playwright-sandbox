import { BasePage } from "~/tests/page";

export class TabsPage extends BasePage {
  static path = "/tabs";

  タブ(name: string) {
    return this.page.getByRole("tab", { name });
  }

  コンテンツ(key: string) {
    return this.page.getByTestId(`${key}-contents`);
  }
}
