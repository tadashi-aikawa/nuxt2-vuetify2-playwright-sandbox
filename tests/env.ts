import * as process from "process";

export function getEnv(key: "BASE_URL"): string | undefined {
  return process.env[key];
}
