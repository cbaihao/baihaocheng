import fs from "fs";
import path from "path";

export interface ParagraphSection {
  type: "paragraph";
  content: string;
}

export interface BulletListSection {
  type: "bulletlist";
  items: string[];
}

export interface SubtitleSection {
  type: "subtitle";
  content: string;
}

export type ContentSection =
  | ParagraphSection
  | BulletListSection
  | SubtitleSection;

export function getArticleContent(filename: string): ContentSection[] {
  const filePath = path.join(process.cwd(), "content", filename);
  const fileContent = fs.readFileSync(filePath, "utf8");

  return parseContent(fileContent);
}

function parseContent(content: string): ContentSection[] {
  const sections = content.split("\n\n").filter((section) => section.trim());

  return sections.map((section) => {
    if (section.startsWith("BULLETLIST:")) {
      const bulletItems = section
        .replace("BULLETLIST:\n", "")
        .split("\n- ")
        .map((item) => item.replace(/^- /, ""));
      return {
        type: "bulletlist" as const,
        items: bulletItems.map(escapeHtml),
      };
    } else if (section.startsWith("SUBTITLE:")) {
      const subtitle = section
        .replace("SUBTITLE:", "")
        .replace(/^\s+/, "")
        .replace(/^\n/, "")
        .trim();
      return {
        type: "subtitle" as const,
        content: escapeHtml(subtitle),
      };
    } else {
      return {
        type: "paragraph" as const,
        content: escapeHtml(section.trim()),
      };
    }
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
