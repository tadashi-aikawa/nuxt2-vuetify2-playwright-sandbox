import { getCurrentInstance } from "vue";

type EventName = "show_github_source";
interface Dimensions {
  component?: string;
  fileKind?: "vue" | "test" | "test-helper" | "util";
}

export function useGtag() {
  const gtag = (getCurrentInstance()?.proxy as any)["$gtag"];

  const recordEvent = (eventName: EventName, dimensions?: Dimensions) => {
    gtag("event", eventName, dimensions);
  };

  return {
    recordEvent,
  };
}

export function useGtagInOptionsAPI(instance: any) {
  const recordEvent = (eventName: EventName, dimensions?: Dimensions) => {
    instance["$gtag"]("event", eventName, dimensions);
  };

  return {
    recordEvent,
  };
}
