import { calculateTip } from "@/libs/calculate-tip";

describe("Calculate Tip", () => {
  it("Returns 0 for tip and amount if people 0", () => {
    expect(
      calculateTip({ tip: 10, people: 0, bill: 100, custom: 0 }),
    ).toStrictEqual({
      tip: 0,
      total: 0,
    });
  });

  it("Calculates correctly with tip", () => {
    expect(
      calculateTip({ bill: 150, people: 10, tip: 10, custom: 0 }),
    ).toStrictEqual({ tip: 1.5, total: 16.5 });
  });

  it("Calculates correctly with custom if tip is 0", () => {
    expect(
      calculateTip({ bill: 150, people: 10, tip: 0, custom: 10 }),
    ).toStrictEqual({ tip: 1.5, total: 16.5 });
  });
});
