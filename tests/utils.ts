import { expect, Locator } from "@playwright/test";

async function asyncSleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function createQueryString(query?: {
  [key: string]: string | number;
}): string {
  if (!query) {
    return "";
  }

  const q: { [key: string]: string } = {};
  for (const [key, value] of Object.entries(query)) {
    if (value != null) {
      q[key] = String(value);
    }
  }
  return new URLSearchParams(q).toString();
}

/**
 * 複数のLocatorに含まれる文字列を順不同で判定
 */
export async function assertLocatorsAsTexts(
  locators: Locator[],
  values: string[],
  option?: {
    trimDelimiter?: boolean; // selectなどの場合は『,』が末尾につくため
  }
) {
  const trimDelimiter = option?.trimDelimiter ?? false;

  const innerTexts = await Promise.all(
    locators.map((x) =>
      x
        .innerText()
        .then((t) => (trimDelimiter ? t.trimEnd().replace(/,$/, "") : t))
    )
  );

  await expect(new Set(innerTexts)).toStrictEqual(new Set(values));
}
