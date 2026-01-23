import { SROnly } from "@/components/shared/SROnly";
import { useState } from "react";

const TIPS = [5, 10, 15, 25, 50];
export const TipSelector = () => {
  const [checked, setChecked] = useState<number | null>(null);
  return (
    <fieldset className="grid grid-cols-2 gap-4 text-center">
      <legend className="mb-4 text-left">Select Tip %</legend>
      {TIPS.map((tip) => (
        <label
          className="green-900 c-white p-2 pointer text-2xl rounded-lg cursor-pointer"
          key={tip}
        >
          <SROnly>tip:</SROnly> {tip}%{" "}
          <input
            type="radio"
            name="tip"
            value={tip}
            className="sr-only"
            checked={checked === tip}
            onChange={({ target }) => {
              if (target.checked) setChecked(tip);
            }}
          />
        </label>
      ))}
      <input
        className="grey-50 rounded-lg p-2 px-4 text-2xl text-right"
        aria-label="Custom tip"
        type="number"
        name="tip"
        placeholder="Custom"
        onFocus={() => setChecked(null)}
      />
    </fieldset>
  );
};
