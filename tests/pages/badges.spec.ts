import { expect, test as base } from "@playwright/test";
import { BadgesPage } from "./badges.helper";
import { buildUrl, createPage } from "~/tests/page-factory";
import { getEnv } from "~/tests/env";

const test = base.extend<{ target: BadgesPage }>({
  target: async ({ playwright }, use) =>
    use(
      new BadgesPage(
        await createPage(playwright, {
          url: buildUrl(
            getEnv("BASE_URL") ?? "localhost:3000",
            BadgesPage.path
          ),
        })
      )
    ),
});

test("バッジの値を確認する", async ({ target }) => {
  await expect(target.バッジ).toHaveText("6");
});
