import { Icon } from "@/components/common/bi-icon";
import { Heading, Section } from "@/components/shared/heading-managers";
import { ResultPreview } from "./result-preview";

export const ResultSection = () => {
  return (
    <Section className="grid gap-8 green-900 p-8 rounded-2xl">
      <Heading className="sr-only">Bellow are your results</Heading>
      <dl className="grid gap-4">
        <ResultPreview name="Tip Amount" value={0} />
        <ResultPreview name="Total" value={0} />
      </dl>
      <button
        className="uppercase green-400 c-green-900 text-xl p-4 rounded-lg"
        type="reset"
      >
        Reset <Icon name="arrow-counterclockwise" />
      </button>
    </Section>
  );
};
