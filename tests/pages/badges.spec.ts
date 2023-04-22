import { expect } from "@playwright/test";
import { BadgesPage } from "./badges.helper";
import { myTest, ページを開く } from "~/tests/page";

myTest("バッジの値を確認する", async ({ page }) => {
  const バッジ画面 = await ページを開く(page, BadgesPage);
  await expect(バッジ画面.バッジ).toHaveText("6");
});
