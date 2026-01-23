import { SplitCalculator } from "@/components/app/split-calculator";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    expect(screen.queryByText("Tip Calculator App")).toBeVisible();
  });
});

describe("Tip Calculator", () => {
  it("renders", () => {
    render(<SplitCalculator />);
    expect(screen.queryByText("Calculate tips on your bills")).toBeVisible();
  });
});
