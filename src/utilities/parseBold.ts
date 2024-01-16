export const parseBold = (line: string) => {
  const boldRegex = /\*\*(.*?)\*\*/g;
  return line.replace(boldRegex, "<strong>$1</strong>");
};
