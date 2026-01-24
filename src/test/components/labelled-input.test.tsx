import { LabelledInput } from "@/components/app/inputs/labelled-input";
import { render, screen } from "@testing-library/react";
import { act } from "react";

describe("Labelled Input", () => {
  it("should show error on empty focusout", async () => {
    render(
      <LabelledInput label="Test Label" icon="bi-test" name="test-name" />,
    );
    const input = screen.getByPlaceholderText("0");
    expect(input).toBeInTheDocument();
    act(() => {
      input.focus();
      input.blur();
    });
    const errorMessage = await screen.findByText("Can't be zero");
    expect(errorMessage).toBeVisible();
  });
  it("should not show error on valid input", async () => {
    render(
      <LabelledInput label="Test Label" icon="bi-test" name="test-name" />,
    );
    const input = screen.getByPlaceholderText<HTMLInputElement>("0");
    expect(input).toBeInTheDocument();
    act(() => {
      input.focus();
      input.value = "25";
      input.blur();
    });
    const errorMessage = await screen.queryByText("Can't be zero");
    expect(errorMessage).toBeNull();
  });
  it("should show error on zero input", async () => {
    render(
      <LabelledInput label="Test Label" icon="bi-test" name="test-name" />,
    );
    const input = screen.getByPlaceholderText<HTMLInputElement>("0");
    expect(input).toBeInTheDocument();
    act(() => {
      input.focus();
      input.value = "0";
      input.blur();
    });
    const errorMessage = await screen.findByText("Can't be zero");
    expect(errorMessage).toBeVisible();
  });
  it("should show error on invalid input", async () => {
    render(
      <LabelledInput label="Test Label" icon="bi-test" name="test-name" />,
    );
    const input = screen.getByPlaceholderText<HTMLInputElement>("0");
    expect(input).toBeInTheDocument();
    act(() => {
      input.focus();
      input.value = "a10";
      input.blur();
    });
    const errorMessage = await screen.findByText("Can't be zero");
    expect(errorMessage).toBeVisible();
  });
});
