import { TipSelector } from "@/components/app/inputs/tip-selector";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Tip selector", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should select predefined tip and clear custom", async () => {
    render(<TipSelector />);
    const tip10 = screen.getByLabelText(/tip: 10%/);
    const customInput = screen.getByPlaceholderText<HTMLInputElement>(/Custom/);

    await userEvent.type(customInput, "15");
    await userEvent.click(tip10);

    expect(customInput.value).toBe("");
  });

  it("should enter custom tip and clear predefined", async () => {
    render(<TipSelector />);

    const tip10 = screen.getByLabelText(/tip: 10%/);
    const customInput = screen.getByPlaceholderText<HTMLInputElement>(/Custom/);

    await userEvent.click(tip10);
    expect(tip10).toBeChecked();
    await userEvent.type(customInput, "20");

    expect(tip10).not.toBeChecked();
    expect(customInput.value).toBe("20");
  });
});
