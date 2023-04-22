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
