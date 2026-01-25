import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App", () => {
  it("renders", async () => {
    render(<App />);
    expect(screen.queryByText("Tip Calculator App")).toBeVisible();
    await userEvent.type(screen.getByLabelText(/Bill/), "100");
    await userEvent.click(screen.getByLabelText(/10%/));
    await userEvent.type(screen.getByLabelText(/People/), "3");
    expect(screen.getByText("$3.33")).toBeVisible(); // Tip Amount Per Person
    expect(screen.getByText("$36.67")).toBeVisible(); // Total Amount Per Person
  });
});
