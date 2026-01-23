export const ResultPreview = ({
  name,
  value,
}: {
  name: string;
  value: number;
}) => {
  return (
    <>
      <dt>
        {name} <span>/ person</span>
      </dt>
      <dd>${value}</dd>
    </>
  );
};
