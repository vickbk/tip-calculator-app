import { SROnly } from "@/components/shared/SROnly";

export const TipSelector = () => {
  return (
    <fieldset>
      <legend>Select Tip %</legend>
      {[5, 10, 15, 25, 50].map((tip) => (
        <label>
          <SROnly>tip:</SROnly> {tip}%{" "}
          <input type="radio" name="tip" value={tip} className="sr-only" />
        </label>
      ))}
      <label>
        <SROnly>Custom type</SROnly>{" "}
        <input type="number" name="tip" placeholder="Custom" />
      </label>
    </fieldset>
  );
};
