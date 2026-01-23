import { Icon } from "@/components/common/bi-icon";
import { Heading, Section } from "@/components/shared/heading-managers";
import { ResultPreview } from "./result-preview";

export const ResultSection = () => {
  return (
    <Section>
      <Heading className="sr-only">Bellow are your results</Heading>
      <ResultPreview />
      <ResultPreview />
      <button type="reset">
        Reset <Icon name="arrow-counterclockwise" />
      </button>
    </Section>
  );
};
