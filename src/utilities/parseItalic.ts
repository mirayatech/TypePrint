export const parseItalic = (line: string) => {
  const italicRegex = /(\*|_)(.*?)\1/g;
  return line.replace(italicRegex, "<em>$2</em>");
};
