import { Icon } from "@/components/common/bi-icon";

export const LabelledInput = ({
  label,
  icon,
  name,
}: Record<"label" | "icon" | "name", string>) => {
  return (
    <label className="grid relative gap-2">
      {label}
      <Icon name={icon + " absolute text-2xl bottom-4 left-4 c-grey-400"} />
      <input
        className="grey-50 p-4 text-right rounded-lg text-2xl c-green-900"
        type="number"
        name={name}
        placeholder="0"
      />
    </label>
  );
};
