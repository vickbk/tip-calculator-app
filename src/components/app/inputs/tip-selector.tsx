import { SROnly } from "@/components/shared/SROnly";
import { useState } from "react";

const TIPS = [5, 10, 15, 25, 50];
export const TipSelector = () => {
  const [checked, setChecked] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  return (
    <fieldset className="grid grid-cols-2 gap-4 text-center">
      <legend className="mb-4 text-left">Select Tip %</legend>
      {TIPS.map((tip) => (
        <label
          className="tip-label  active-grey-200 active-c-green-900"
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
              if (target.checked) {
                setCustom("");
                setChecked(tip);
              }
            }}
          />
        </label>
      ))}
      <input
        className="grey-50 rounded-lg p-2 px-4 text-2xl text-right active-out-green-400 hover:outline-2 focus:outline-2"
        aria-label="Custom tip"
        type="number"
        placeholder="Custom"
        name="custom"
        value={custom}
        min={0}
        max={100}
        onChange={({ target: { value } }) => setCustom(value)}
        onFocus={() => setChecked(null)}
      />
    </fieldset>
  );
};
