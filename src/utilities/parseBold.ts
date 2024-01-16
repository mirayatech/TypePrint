export const parseBold = (line: string) => {
  const boldRegex = /(\*\*|__)(.*?)\1/g;
  return line.replace(boldRegex, "<strong>$2</strong>");
};
