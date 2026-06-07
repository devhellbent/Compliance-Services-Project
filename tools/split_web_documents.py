#!/usr/bin/env python3
"""
Split extracted DOCUMENTS markdown into per-service appendix files under src/content/documents/.
"""
from __future__ import annotations

import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC_CONTENT = ROOT / "src" / "content" / "documents"
EXTRACTED = ROOT / "DOCUMENTS_extracted"
REG_SRC = EXTRACTED / "Registration" / "company-registration.md"
CORP_SRC = EXTRACTED / "Compliance" / "corporate-service.md"


def slice_lines(path: Path, start: int, end: int | None) -> str:
    """1-based inclusive start, 1-based inclusive end (or None = EOF)."""
    lines = path.read_text(encoding="utf-8").splitlines(keepends=True)
    if end is None:
        chunk = lines[start - 1 :]
    else:
        chunk = lines[start - 1 : end]
    return "".join(chunk).strip() + "\n"


def main() -> None:
    if not REG_SRC.is_file():
        raise SystemExit(f"Missing {REG_SRC}; run tools/docx_extract.py first")
    if not CORP_SRC.is_file():
        raise SystemExit(f"Missing {CORP_SRC}")

    reg_out = SRC_CONTENT / "registration"
    corp_out = SRC_CONTENT / "compliance" / "corporate"
    reg_out.mkdir(parents=True, exist_ok=True)
    corp_out.mkdir(parents=True, exist_ok=True)

    # Line ranges from DOCUMENTS_extracted/Registration/company-registration.md (verified)
    reg_slices: list[tuple[str, int, int | None]] = [
        ("proprietorship.md", 1, 211),
        ("partnership.md", 212, 450),
        ("limited-liability-partnership.md", 451, 667),
        ("one-person-company.md", 668, 873),
        ("private-limited-company.md", 874, 1076),
        ("public-limited-company.md", 1077, 1266),
        ("producer-company.md", 1267, 1474),
        ("nidhi-company.md", 1475, 1637),
        ("section-8-company.md", 1638, 1950),
        ("trust-registration.md", 1951, 2391),
        ("society-registration.md", 2392, 2757),
        ("indian-subsidiary.md", 2758, 3269),
        ("foreign-subsidiary-company-registration.md", 3270, 3583),
        ("microfinance-company-registration.md", 3584, 3932),
        ("startup-india-registration.md", 3933, None),
    ]
    for name, lo, hi in reg_slices:
        (reg_out / name).write_text(slice_lines(REG_SRC, lo, hi), encoding="utf-8")
        print(f"wrote registration/{name}")

    corp_slices: list[tuple[str, int, int | None]] = [
        ("share-allotment-and-transfer.md", 1, 239),
        ("right-issue-private-placement.md", 241, 447),
        ("buy-back-of-shares.md", 449, 623),
        ("issue-of-preference-shares-convertible-debentures.md", 624, 823),
        ("reduction-of-share-capital.md", 824, 981),
        ("esop-structuring-and-implementation.md", 982, 1129),
        ("xbrl-filing.md", 1130, None),
    ]
    for name, lo, hi in corp_slices:
        (corp_out / name).write_text(slice_lines(CORP_SRC, lo, hi), encoding="utf-8")
        print(f"wrote compliance/corporate/{name}")

    # Charge creation — only brief bullet in MCA doc; appendix = excerpt + pointers
    mca_cc = EXTRACTED / "MCA" / "company-complance.md"
    excerpt = ""
    if mca_cc.is_file():
        lines = mca_cc.read_text(encoding="utf-8").splitlines()
        # Lines 672–720 (~) cover Private Company event-based incl. Charge bullet
        ex_lines = lines[671:720]
        excerpt = (
            "## Extract from MCA — Company Compliance (Private company event filings)\n\n"
            + "\n".join(ex_lines).strip()
            + "\n"
        )
    charge_txt = (
        "# Charge Creation, Modification & Satisfaction\n\n"
        "**Note:** The client *Corporate Service* Word document in `DOCUMENTS/Compliance/` "
        "does not contain a standalone chapter titled Charge Creation—this appendix pulls the "
        "related **event-based compliance** excerpt from **`DOCUMENTS/MCA/Company Complance.docx`** "
        "and you should read it together with the structured sections above.\n\n"
        "---\n\n"
        + excerpt
    )
    (corp_out / "charge-creation-modification-and-satisfaction.md").write_text(
        charge_txt, encoding="utf-8"
    )
    print("wrote compliance/corporate/charge-creation-modification-and-satisfaction.md")

    categories = SRC_CONTENT / "categories"
    categories.mkdir(parents=True, exist_ok=True)
    # Symlink-like copies from DOCUMENTS_extracted for category pages (full thematic docs)
    cat_map = [
        ("company-registration.md", EXTRACTED / "Registration" / "company-registration.md"),
        ("intellectual-property-services.md", EXTRACTED / "Registration" / "intellectual-property-services.md"),
        ("labour-law-services.md", EXTRACTED / "Registration" / "labour-law-services.md"),
        ("legal-registration.md", EXTRACTED / "Registration" / "legal-registration.md"),
        ("regulatory-license.md", EXTRACTED / "Registration" / "regulatory-license.md"),
        ("corporate-service.md", EXTRACTED / "Compliance" / "corporate-service.md"),
        ("sebi-compliance.md", EXTRACTED / "Compliance" / "sebi-compliance.md"),
        ("audit-due-diligence.md", EXTRACTED / "Compliance" / "audit-due-diligence.md"),
        ("corporate-restructuring-compliance.md", EXTRACTED / "Compliance" / "corporate-restructuring-compliance.md"),
        ("company-compliance.md", EXTRACTED / "MCA" / "company-complance.md"),
        ("annual-half-yearly-compliance.md", EXTRACTED / "MCA" / "annually-half-yearly-complance.md"),
        ("mca-services.md", EXTRACTED / "MCA" / "mca-services.md"),
        ("special-compliance-services.md", EXTRACTED / "MCA" / "special-compliance-services.md"),
        ("legal-business-transformations.md", EXTRACTED / "MCA" / "legal-business-transformations.md"),
        ("share-management-solutions.md", EXTRACTED / "MCA" / "share-management-solutions.md"),
        ("gst.md", EXTRACTED / "Taxation" / "gst.md"),
        ("income-tax.md", EXTRACTED / "Taxation" / "income-tax.md"),
        ("regulatory-return-filing.md", EXTRACTED / "Taxation" / "regulatory-return-filing.md"),
    ]
    for dest_name, src in cat_map:
        if not src.is_file():
            print(f"skip missing {src}")
            continue
        shutil.copy2(src, categories / dest_name)
        print(f"copied categories/{dest_name}")


if __name__ == "__main__":
    main()
