// lib/data/services/trademark-protection.ts

import { ServiceData } from "@/lib/types";

export const trademarkProtectionData: ServiceData = {
  title: "Trademark Protection",
  breadcrumb: ["Home", "Intellectual Property", "Trademark Protection"],
  overview:
    `Trademark protection is the legal framework that safeguards a distinctive mark---such as a word, logo, symbol, or design---used by a business to identify its goods or services and distinguish them from those of competitors. Its **primary purpose** is two-fold: to protect the goodwill and reputation of the business, and to prevent consumer confusion in the marketplace. By granting the owner an exclusive right to use the mark, the law ensures that customers can reliably associate a mark with a specific source and quality, fostering trust and loyalty.

In India, this protection is primarily governed by the **Trade Marks Act, 1999**. A registered trademark grants the proprietor a clear statutory right to take legal action for infringement against any party using an identical or deceptively similar mark for related goods or services without permission. For unregistered but well-used marks, the law offers protection through the common law remedy of **\"passing off,\"** although this requires the owner to prove prior use and reputation, which is often more burdensome than simply relying on a registration certificate.

Ultimately, trademark protection is a vital business asset. It not only secures the brand\'s identity and market position but also adds tangible value to the company as an **intangible asset** that can be sold, licensed, or used to raise finance. Registration provides a strong legal deterrent against copycats, ensures long-term market exclusivity (renewable every ten years), and is a foundational step for commercial expansion and global protection.

**What is Trademark**

A trademark is a word, logo, symbol, or design that uniquely identifies and distinguishes the goods or services of one business from those of its competitors. It serves as the legal source identifier (the brand), protecting the company\'s reputation and preventing consumer confusion in the marketplace. It is a valuable form of intellectual property.

**Common Types Include in Trademark**

-   **Word Marks:** Protects the brand name, slogan, or phrase in standard text format, regardless of font, color, or design. This gives the broadest protection over the words themselves.

> *Example:* **Reliance**, **Just Do It**

-   **Device Marks / Logo Marks:** Protects a specific visual symbol, logo, graphic design, image, or stylized representation (with or without words).

> *Example:* The **Nike Swoosh** symbol, the **Apple** silhouette.

-   **Composite Marks:** A combination of both a Word Mark and a Device Mark, where the words and the logo are registered together as a single unit.

> *Example:* The **Coca-Cola** name written in its unique script.

-   **Shape Marks:** Protects the distinctive three-dimensional shape of a product or its packaging, provided the shape is not purely functional.

> *Example:* The shape of the **Coca-Cola bottle** or the **Toblerone** > bar shape.

-   **Colour Marks:** Protects a specific single color or combination of colors that has acquired distinctiveness and is strongly associated with the brand.

> *Example:* **Cadbury\'s Purple** (for chocolate) or **Tiffany Blue**.

-   **Sound Marks:** Protects a unique, distinctive sound or short jingle used to identify a brand\'s goods or services.

> *Example:* The **Netflix \"ta-dum\"** sound at the start of a show`,
  advantages: [
    {
        icon: "Shield",
        title: "of Trademark Protection",
        text: "",
        subPoints: [
            "**Exclusive Rights:** Grants the registered owner the sole right to use the mark nationwide for the goods/services specified.",
            "**Legal Proof:** The registration certificate is **prima facie evidence** of the mark\\'s validity and ownership, making court cases simpler.",
            "**Consumer Trust:** Assures customers of the consistent source and quality of the product, building goodwill and brand loyalty.",
            "**Valuable Asset:** The trademark becomes an **intangible asset** on the company\\'s balance sheet; it can be licensed, franchised, or sold.",
            "**Notice to Public:** Allows the legal use of the symbol, publicly warning potential infringers.",
            "**Deterrent:** Registration appears in official search results, discouraging competitors from adopting similar marks.",
            "**Long-Term Protection:** Protection is potentially indefinite, renewable every 10 years, ensuring long-term market presence."
        ]
    }
],
  disadvantages: [
    {
        icon: "Shield",
        title: "of Trademark Protection",
        text: "",
        subPoints: [
            "**Initial Cost & Time:** The registration process involves government fees, legal costs, and can take many months or over a year to complete.",
            "**Geographical Limit:** Protection is typically only valid in the country where it is registered; global protection requires multiple filings.",
            "**Enforcement Duty:** The owner bears the responsibility and cost of constantly monitoring the market for infringement and taking legal action.",
            "**Renewal Obligation:** Rights must be maintained by paying a renewal fee (usually every 10 years); failure to renew results in loss of protection.",
            "**Protection Scope Limit:** The protection is restricted to the specific goods and services (classes) listed in the application, not the entire market.",
            "**Rigidity:** Making significant changes to the mark (logo, name style) often requires filing an entirely new application."
        ]
    }
],
  eligibility: [
    "Here's a clear summary of the Eligibility Criteria for Trademark     Protection in India, as per the Trade Marks Act, 1999 and Trade     Marks Rules, 2017"
],
  documents: [
    {
      tabTitle: "For Legal Action",
      content: {
        title: "Evidence Required",
        items: [
          "Copy of your Trademark Registration Certificate.",
          "Evidence of your mark's use and reputation (e.g., invoices, advertisements, sales figures).",
          "Evidence of the infringing party's use of a similar mark.",
          "Proof of public confusion, if available.",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Trademark Watch & Monitoring",
      description:
        "Subscribe to a professional service that monitors the Trademark Journal and the market for deceptively similar marks being filed or used.",
    },
    {
      step: 2,
      title: "Send a Cease and Desist Notice",
      description:
        "If an infringement is detected, the first step is usually to send a legal notice to the infringer, demanding that they stop using the mark.",
    },
    {
      step: 3,
      title: "File a Trademark Opposition",
      description:
        "If a similar mark is published in the Trademark Journal, you can file an opposition to prevent it from being registered.",
    },
    {
      step: 4,
      title: "Initiate Legal Action",
      description:
        "If the infringer does not comply, you can file a civil suit for infringement in a court of law to obtain an injunction and claim damages, or file a criminal complaint.",
    },
  ],
  fees: [
    {
      component: "Trademark Watch Service",
      fees: "₹10,000 - ₹25,000 per year",
      remarks: "Professional fees for monitoring services.",
    },
    {
      component: "Cease and Desist Notice",
      fees: "₹5,000 - ₹15,000",
      remarks: "Legal fees for drafting and sending the notice.",
    },
    {
      component: "Opposition/Infringement Suit",
      fees: "₹25,000+",
      remarks:
        "Legal fees for litigation are significantly higher and depend on the complexity of the case.",
    },
  ],
  faqs: [
    {
      q: "What is the difference between infringement and passing off?",
      a: "Infringement is the unauthorized use of a **registered** trademark. Passing off is a common law remedy for the unauthorized use of an **unregistered** trademark, where you have to prove that your mark has acquired significant goodwill and that the infringer's use is causing public deception.",
    },
    {
      q: "What is a Trademark Watch service?",
      a: "It's a professional service where experts continuously monitor the Trademark Registry's database and journal for any new applications that are confusingly similar to your trademark, allowing you to take timely action.",
    },
    {
      q: "Can I take action if my trademark is not yet registered?",
      a: "Yes. If your brand has established a strong reputation and goodwill in the market, you can take legal action against an infringer under the common law of 'passing off', even if your trademark is not registered.",
    },
  ],
};
