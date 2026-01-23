export const ResultPreview = ({
  name,
  value,
}: {
  name: string;
  value: number;
}) => {
  return (
    <div className="flex items-center justify-between">
      <dt className="c-white grid">
        {name} <span className="c-grey-400">/ person</span>
      </dt>
      <dd className="c-green-400 text-3xl">${value.toFixed(2)}</dd>
    </div>
  );
};
