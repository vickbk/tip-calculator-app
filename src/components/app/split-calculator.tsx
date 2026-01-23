import { Heading } from "../shared/heading-managers";
import { InputSection } from "./inputs/inputs-section";
import { ResultSection } from "./results/results-section";

export const SplitCalculator = () => {
  return (
    <form className="white p-8 grid gap-8 font-bold rounded-4xl">
      <Heading className="sr-only">Calculate tips on your bills</Heading>
      <InputSection />
      <ResultSection />
    </form>
  );
};
