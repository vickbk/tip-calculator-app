import { Icon } from "@/components/common/bi-icon";

export const LabelledInput = () => {
  return (
    <label>
      label <Icon name="currency-dollar" />
      <input type="number" name="name" placeholder="0" />
    </label>
  );
};
