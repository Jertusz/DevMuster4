export const mapDiff = (diff) => {
  if (diff.toLowerCase() === "e") return 1;
  if (diff.toLowerCase() === "m") return 2;
  return 3;
};
