import { calculateTip } from "@/libs/calculate-tip";
import { useState } from "react";
import { Heading } from "../shared/heading-managers";
import { InputSection } from "./inputs/inputs-section";
import { ResultSection } from "./results/results-section";

export const SplitCalculator = () => {
  const [touched, setTouched] = useState(false);

  const [results, setResults] = useState({ tip: 0, total: 0 });

  function splitBill({ currentTarget }: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(currentTarget);

    setTouched([...formData].some(([, value]) => value !== ""));

    const { tip, bill, custom, people } = Object.fromEntries(
      formData,
    ) as Record<"tip" | "bill" | "custom" | "people", string>;

    setResults(
      calculateTip({
        tip: +tip,
        bill: +bill,
        custom: +custom,
        people: +people,
      }),
    );
  }
  return (
    <form
      onChange={splitBill}
      onReset={() => setTouched(false)}
      className="white p-8 grid sm:grid-cols-2 gap-8 font-bold rounded-t-4xl sm:rounded-4xl sm:mb-12 max-w-200"
    >
      <Heading className="sr-only">Calculate tips on your bills</Heading>
      <InputSection />
      <ResultSection {...{ touched, results }} />
    </form>
  );
};
