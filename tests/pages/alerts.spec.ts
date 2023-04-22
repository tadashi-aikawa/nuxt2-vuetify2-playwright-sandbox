import { expect } from "@playwright/test";
import { myTest, ページを開く } from "~/tests/page";
import { AlertsPage } from "~/tests/pages/alerts.helper";

myTest("アラートメッセージを確認する", async ({ page }) => {
  const アラート画面 = await ページを開く(page, AlertsPage);
  await expect(アラート画面.アラート).toHaveText("これはエラーです");
});
