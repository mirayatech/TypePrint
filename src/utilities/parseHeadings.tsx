export const parseHeadings = (line: string) => {
  if (line.startsWith("### ")) return <h3>{line.slice(4)}</h3>;
  if (line.startsWith("## ")) return <h2>{line.slice(3)}</h2>;
  if (line.startsWith("# ")) return <h1>{line.slice(2)}</h1>;
  return null;
};
