export const formatCompactNumber = (number: string) => {
  const suffixes = [
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
  ];

  for (const suffix of suffixes) {
    if (Number(number) >= suffix.value) {
      return `${(Number(number) / suffix.value).toFixed(1)}${suffix.symbol}`;
    }
  }
  return number;
};
