import { expect, Locator } from "@playwright/test";

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
    trimDelimiter?: boolean;
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
  expect(new Set(innerTexts)).toEqual(new Set(values));
}
