import { Icon } from "@/components/common/bi-icon";

export const LabelledInput = ({
  label,
  icon,
  name,
}: Record<"label" | "icon" | "name", string>) => {
  return (
    <label>
      {label} <Icon name={icon} />
      <input type="number" name={name} placeholder="0" />
    </label>
  );
};
