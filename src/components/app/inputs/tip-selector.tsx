import { SROnly } from "@/components/shared/SROnly";
import { useState } from "react";

const TIPS = [5, 10, 15, 25, 50];
export const TipSelector = () => {
  const [checked, setChecked] = useState<number | null>(null);
  return (
    <fieldset>
      <legend>Select Tip %</legend>
      {TIPS.map((tip) => (
        <label key={tip}>
          <SROnly>tip:</SROnly> {tip}%{" "}
          <input
            type="radio"
            name="tip"
            value={tip}
            className="sr-onlys"
            checked={checked === tip}
            onChange={({ target }) => {
              if (target.checked) setChecked(tip);
            }}
          />
        </label>
      ))}
      <label>
        <SROnly>Custom type</SROnly>{" "}
        <input
          type="number"
          name="tip"
          placeholder="Custom"
          onFocus={() => setChecked(null)}
        />
      </label>
    </fieldset>
  );
};
