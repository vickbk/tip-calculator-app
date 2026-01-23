export function calculateTip({
  tip,
  bill,
  custom,
  people,
}: Record<"tip" | "people" | "custom" | "bill", number>) {
  if (people === 0) return { tip: 0, total: 0 };
  const tipToUse = tip || custom;
  const personTip = ((bill / people) * tipToUse) / 100;
  const total = bill / people + personTip;
  return { tip: personTip, total };
}
