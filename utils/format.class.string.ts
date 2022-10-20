export default (classString: string): string => {
  return classString
    .trim()
    .split("\n")
    .reduce((result, currentValue) => {
      if (currentValue.trim() === "") return result;
      return result += " " + currentValue.trim()
    }, "")
    .trim()
}