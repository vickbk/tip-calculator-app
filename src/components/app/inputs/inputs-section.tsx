import { Heading, Section } from "@/components/shared/heading-managers";
import { LabelledInput } from "./labelled-input";
import { TipSelector } from "./tip-selector";

export const InputSection = () => {
  return (
    <Section>
      <Heading className="sr-only">Enter your bills information</Heading>
      <LabelledInput label="Bill" icon="currency-dollar" name="bill" />
      <TipSelector />
      <LabelledInput
        label="Number of People"
        icon="person-fill"
        name="people"
      />
    </Section>
  );
};
