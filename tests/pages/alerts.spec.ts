import { expect, test as base } from "@playwright/test";
import { AlertsPage } from "./alerts.helper";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "../env";

const test = base.extend<{ target: AlertsPage }>({
  target: async ({ playwright }, use) =>
    use(
      new AlertsPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            AlertsPage.path
          ),
        })
      )
    ),
});

test("アラートメッセージを確認する", async ({ target }) => {
  await expect(target.アラート).toHaveText("これはエラーです");
});
