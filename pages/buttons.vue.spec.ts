import { render, screen, fireEvent } from "@testing-library/vue";
import "@testing-library/jest-dom";
import { test } from "@jest/globals";
import buttons from "./buttons.vue";
import vuetify from "~/setup-jest";

test("increments value on click", async () => {
  render(buttons, { vuetify });

  const button = screen.getByRole("button", { name: "押すと無効になる" });
  expect(button).toBeEnabled();

  await fireEvent.click(button);
  expect(button).toBeDisabled();
});
