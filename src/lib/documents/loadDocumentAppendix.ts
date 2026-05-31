import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  CATEGORY_APPENDIX_SEGMENTS,
  SERVICE_APPENDIX_SEGMENTS,
} from "./serviceAppendixPaths";

const DOC_ROOT = path.join(process.cwd(), "src", "content", "documents");

const loadBySegments = async (segments?: string[]) => {
  if (!segments || segments.length === 0) return null;
  try {
    const fullPath = path.join(DOC_ROOT, ...segments);
    const markdown = await readFile(fullPath, "utf8");
    return markdown.trim() || null;
  } catch {
    return null;
  }
};

export const loadServiceAppendix = async (slug: string) =>
  loadBySegments(SERVICE_APPENDIX_SEGMENTS[slug]);

export const loadCategoryAppendix = async (slug: string) =>
  loadBySegments(CATEGORY_APPENDIX_SEGMENTS[slug]);
