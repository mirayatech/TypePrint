export const parseInlineCode = (line: string) => {
  const inlineCodeRegex = /`(.*?)`/g;
  return line.replace(inlineCodeRegex, "<code>$1</code>");
};
