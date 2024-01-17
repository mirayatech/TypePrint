import React, { useEffect, useRef, useState } from "react";
import {
  parseItalic,
  parseBold,
  parseHeadings,
  parseStrikethrough,
  parseBlockquote,
  parseInlineCode,
  parseHorizontalRule,
  parseHighlight,
  parseLinks,
  parseImages,
  parseUnorderedList,
} from "./utilities";
import "./index.css";
import "./preview.css";

export default function App() {
  const [markdownInput, setMarkdownInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedMarkdown = localStorage.getItem("markdownInput");
    if (savedMarkdown) {
      setMarkdownInput(savedMarkdown);
    }

    if (textareaRef.current) {
      textareaRef.current.focus();
    }

    const syncScroll = () => {
      if (textareaRef.current && previewRef.current) {
        const textareaScrollPercentage =
          textareaRef.current.scrollTop / textareaRef.current.scrollHeight;
        previewRef.current.scrollTop =
          previewRef.current.scrollHeight * textareaScrollPercentage;
      }
    };

    if (textareaRef.current) {
      textareaRef.current.addEventListener("scroll", syncScroll);
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener("scroll", syncScroll);
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("markdownInput", markdownInput);
  }, [markdownInput]);

  const parseMarkdown = (markdownText: string) => {
    const unorderedListProcessedText = parseUnorderedList(markdownText);
    const lines = unorderedListProcessedText.split("\n");

    return lines.map((line, index) => {
      if (
        line.startsWith("<li>") ||
        line.startsWith("</ul>") ||
        line.startsWith("<ul>")
      ) {
        return <div key={index} dangerouslySetInnerHTML={{ __html: line }} />;
      }

      const element =
        parseHorizontalRule(line) ||
        parseBlockquote(line) ||
        parseHeadings(line);

      if (element) {
        return React.cloneElement(element, { key: index });
      }

      let parsedLine = parseBold(line);
      parsedLine = parseItalic(parsedLine);
      parsedLine = parseStrikethrough(parsedLine);
      parsedLine = parseInlineCode(parsedLine);
      parsedLine = parseHighlight(parsedLine);
      parsedLine = parseImages(parsedLine);
      parsedLine = parseLinks(parsedLine);

      return <p key={index} dangerouslySetInnerHTML={{ __html: parsedLine }} />;
    });
  };

  return (
    <>
      <header>
        <h1>TypePrint</h1>
        <h2>Markdown Editor and Preview Tool</h2>
      </header>
      <main>
        <div className="editor">
          <textarea
            ref={textareaRef}
            value={markdownInput}
            onChange={(event) => setMarkdownInput(event.target.value)}
            placeholder="Write your markdown here..."
          />
        </div>
        <div className="preview" ref={previewRef}>
          {parseMarkdown(markdownInput)}
        </div>
      </main>
    </>
  );
}
