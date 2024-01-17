export const parseStrikethrough = (line: string) => {
  const strikethroughRegex = /~~(.*?)~~/g;
  return line.replace(strikethroughRegex, "<del>$1</del>");
};
