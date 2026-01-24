import { Icon } from "@/components/common/bi-icon";
import { joinClasses } from "@/libs/classname-helper";
import { useState } from "react";

export const LabelledInput = ({
  label,
  icon,
  name,
}: Record<"label" | "icon" | "name", string>) => {
  const [error, setError] = useState(false);
  function checkError({
    target: { value },
  }: React.FocusEvent<HTMLInputElement, Element>) {
    setError(Number(value) === 0);
  }
  return (
    <label className="grid relative gap-2">
      {label}
      <Icon name={icon + " absolute text-2xl bottom-4 left-4 c-grey-400"} />
      {error && (
        <span className="absolute right-0 text-red-600">Can't be zero</span>
      )}
      <input
        className={joinClasses([
          error
            ? "outline-2 outline-red-600! text-red-600"
            : "active-out-green-400 c-green-900",
          "grey-50 p-4 text-right rounded-lg text-2xl focus:outline-2 hover:outline-2",
        ])}
        type="number"
        name={name}
        placeholder="0"
        onBlur={checkError}
        onChange={checkError}
      />
    </label>
  );
};
