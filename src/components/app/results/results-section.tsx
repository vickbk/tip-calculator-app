import { Icon } from "@/components/common/bi-icon";
import { Heading, Section } from "@/components/shared/heading-managers";
import { ResultPreview } from "./result-preview";

export const ResultSection = ({
  touched,
  results: { tip, total },
}: {
  touched: boolean;
  results: { tip: number; total: number };
}) => {
  return (
    <Section className="flex flex-col gap-8 green-900 p-8 rounded-2xl">
      <Heading className="sr-only">Bellow are your results</Heading>
      <dl className="grid gap-4">
        <ResultPreview name="Tip Amount" value={tip} />
        <ResultPreview name="Total" value={total} />
      </dl>
      <button
        className="uppercase green-400 c-green-900 text-xl p-4 rounded-lg mt-auto active-grey-200 active-c-green-900"
        type="reset"
        disabled={!touched}
      >
        Reset <Icon name="arrow-counterclockwise" />
      </button>
    </Section>
  );
};
