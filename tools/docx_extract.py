#!/usr/bin/env python3
"""
Extract Word (.docx) content in document order: paragraphs + tables as Markdown.
Uses correct OOXML namespace (openXMLformats).
"""
from __future__ import annotations

import argparse
import re
import sys
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"


def para_text(p: ET.Element) -> str:
    parts: list[str] = []
    for t in p.iter(f"{W}t"):
        parts.append(t.text or "")
        if t.tail:
            parts.append(t.tail)
    s = "".join(parts).strip()
    s = s.replace("\u00a0", " ")
    return s.strip()


def cell_text(cell: ET.Element) -> str:
    lines: list[str] = []
    for p in cell.iter(f"{W}p"):
        tx = para_text(p)
        if tx:
            lines.append(tx)
    return " ".join(lines).strip()


def table_md(tbl: ET.Element) -> str:
    rows: list[list[str]] = []
    for tr in tbl.iter(f"{W}tr"):
        row: list[str] = []
        for tc in tr:
            if not tc.tag.endswith("}tc"):
                continue
            row.append(cell_text(tc))
        if any(c.strip() for c in row):
            rows.append(row)
    if not rows:
        return ""
    ncol = max(len(r) for r in rows)
    rows = [r + [""] * (ncol - len(r)) for r in rows]
    head = "| " + " | ".join(rows[0]) + " |"
    sep = "| " + " | ".join(["---"] * ncol) + " |"
    body = "\n".join("| " + " | ".join(r) + " |" for r in rows[1:])
    return "\n".join([head, sep, body]) if body else "\n".join([head, sep])


def docx_to_markdown(docx_path: Path) -> str:
    xml = zipfile.ZipFile(docx_path).read("word/document.xml")
    root = ET.fromstring(xml)
    body = root[0]
    chunks: list[str] = []
    for elem in body:
        if elem.tag == f"{W}p":
            tx = para_text(elem)
            if tx:
                chunks.append(tx)
        elif elem.tag == f"{W}tbl":
            tm = table_md(elem)
            if tm:
                chunks.append("\n" + tm + "\n")
    return "\n\n".join(chunks)


def slugify_filename(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "documents_root",
        type=Path,
        default=Path("DOCUMENTS"),
        nargs="?",
    )
    ap.add_argument(
        "-o",
        "--out",
        type=Path,
        default=Path("DOCUMENTS_extracted"),
    )
    args = ap.parse_args()
    root: Path = args.documents_root
    out_root: Path = args.out
    if not root.is_dir():
        print(f"Missing folder: {root}", file=sys.stderr)
        return 1
    docx_files = sorted(root.rglob("*.docx"))
    if not docx_files:
        print("No docx files found.", file=sys.stderr)
        return 1
    for docx in docx_files:
        rel_parent = docx.parent.relative_to(root)
        stem = slugify_filename(docx.stem)
        target = out_root / rel_parent / f"{stem}.md"
        target.parent.mkdir(parents=True, exist_ok=True)
        md = docx_to_markdown(docx)
        target.write_text(md, encoding="utf-8")
        print(f"wrote {target} ({len(md)} chars)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
