import { LabelledInput } from "@/components/app/inputs/labelled-input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Labelled Input", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should show error on empty focusout", async () => {
    render(
      <LabelledInput label="Test Label" icon="bi-test" name="test-name" />,
    );

    const input = screen.getByPlaceholderText(/0/);
    expect(input).toBeInTheDocument();

    await userEvent.click(input);
    await userEvent.click(document.body);

    const errorMessage = await screen.findByText(/Can't be zero/);
    expect(errorMessage).toBeVisible();
  });

  it("should not show error on valid input", async () => {
    render(
      <LabelledInput label="Test Label" icon="bi-test" name="test-name" />,
    );
    const input = screen.getByPlaceholderText<HTMLInputElement>(/0/);
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "25");
    await userEvent.click(document.body);

    const errorMessage = await screen.queryByText(/Can't be zero/);
    expect(errorMessage).toBeNull();
  });

  it("should show error on zero input", async () => {
    render(
      <LabelledInput label="Test Label" icon="bi-test" name="test-name" />,
    );

    const input = screen.getByPlaceholderText<HTMLInputElement>(/0/);
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "0");
    await userEvent.click(document.body);

    const errorMessage = await screen.findByText(/Can't be zero/);
    expect(errorMessage).toBeVisible();
  });

  it("should show error on invalid input", async () => {
    render(
      <LabelledInput label="Test Label" icon="bi-test" name="test-name" />,
    );

    const input = screen.getByPlaceholderText<HTMLInputElement>(/0/);
    expect(input).toBeInTheDocument();

    await userEvent.click(input);
    input.value = "a10";
    await userEvent.click(document.body);

    const errorMessage = await screen.findByText(/Can't be zero/);
    expect(errorMessage).toBeVisible();
  });
});
