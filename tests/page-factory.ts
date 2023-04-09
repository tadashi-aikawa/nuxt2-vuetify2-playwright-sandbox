import { Page } from "@playwright/test";

export function buildUrl(base: string, path: string): string {
  return `${base}${path}`;
}

export async function createPage(
  playwright: typeof import("playwright-core"),
  option?: {
    url?: string;
    slowMo?: number;
    width?: number;
    height?: number;
  }
): Promise<Page> {
  const proxyServer = process.env["PROXY_SERVER"];
  const bypassList = process.env["PROXY_BYPASS_LIST"];
  const browser = await playwright["chromium"].launch({
    args: [
      proxyServer ? `--proxy-server=${proxyServer}` : undefined,
      bypassList ? `--proxy-bypass-list=${bypassList}` : undefined,
    ].filter((x) => x) as string[],
    slowMo: option?.slowMo ?? 200,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.setViewportSize({
    width: option?.width ?? 1920,
    height: option?.height ?? 900,
  });

  if (option?.url) {
    await page.goto(option.url);
  }

  return page;
}
