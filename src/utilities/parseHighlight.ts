export const parseHighlight = (line: string) => {
  const highlightRegex = /==(.+?)==/g;
  return line.replace(highlightRegex, "<span class='highlight'>$1</span>");
};
