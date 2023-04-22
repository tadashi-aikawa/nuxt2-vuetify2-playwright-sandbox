import * as process from "process";

export function getEnv(key: "BASE_URL"): string | undefined {
  return process.env[key];
}

export function getBaseUrl(): string {
  return getEnv("BASE_URL") ?? "http://localhost:3000";
}
