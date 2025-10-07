// lib/data/services/trademark-hearing.ts

import { ServiceData } from "@/lib/types";

export const trademarkHearingData: ServiceData = {
  title: "Trademark Hearing",
  breadcrumb: ["Home", "Intellectual Property", "Trademark Hearing"],
  overview:
    "A **Trademark Hearing** is a formal proceeding conducted by a Hearing Officer at the Trademark Registry. It is scheduled when the Trademark Examiner is not convinced by the written reply filed against an **objection** in the Examination Report. 🏛️ This hearing is the applicant's opportunity to present their case orally, provide legal arguments, and submit evidence to persuade the officer to waive the objection and allow the trademark to be published.",
  advantages: [
    {
      icon: "MessageSquare",
      title: "Opportunity for Oral Arguments",
      text: "Allows you to present your case and legal arguments directly to the Hearing Officer, which can be more persuasive than a written reply.",
    },
    {
      icon: "FileCheck",
      title: "Clarify Complex Issues",
      text: "Provides a platform to clarify any complex legal or factual points that may not have been fully addressed in the written response.",
    },
    {
      icon: "Library",
      title: "Submission of Evidence",
      text: "You can submit additional evidence, such as proof of extensive use or case law precedents, to strengthen your application.",
    },
    {
      icon: "ShieldCheck",
      title: "Final Chance to Save the Mark",
      text: "It is often the last and most critical opportunity to overcome the examiner's objections and prevent the application from being refused.",
    },
  ],
  disadvantages: [
    {
      icon: "Gavel",
      title: "Requires Strong Legal Representation",
      text: "Success at a hearing often depends on the expertise of a trademark attorney who can present legally sound arguments.",
    },
    {
      icon: "Clock",
      title: "Adds Time and Cost",
      text: "The hearing process adds several months to the registration timeline and involves professional fees for representation.",
    },
    {
      icon: "AlertTriangle",
      title: "Risk of Refusal",
      text: "If the arguments presented are not convincing, the Hearing Officer may refuse the application, leading to its abandonment.",
    },
  ],
  eligibility: [
    {
      title: "When is a Hearing Scheduled?",
      items: [
        "A hearing is scheduled for any applicant whose trademark application has received an objection from the examiner.",
        "The applicant must have filed a written reply to the Examination Report.",
        "The examiner, after reviewing the reply, is still not satisfied and maintains the objection.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "Required for the Hearing",
      content: {
        title: "Case File and Authorizations",
        items: [
          "**Hearing Notice**: The official notice sent by the Trademark Registry.",
          "**Power of Attorney (TM-48)**: Authorizing the attorney to appear on the applicant's behalf.",
          "**Examination Report & Reply**: A copy of the original objection report and the written reply that was filed.",
          "**Supporting Evidence**: Documents proving the distinctiveness or prior use of the trademark (e.g., invoices, marketing materials).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Receive Hearing Notice",
      description:
        "The Trademark Registry sends a notice to the applicant or their agent, specifying the date, time, and mode (physical/video conference) of the hearing.",
    },
    {
      step: 2,
      title: "Prepare for the Hearing",
      description:
        "The trademark attorney prepares the case by gathering all evidence, drafting legal arguments, and citing relevant case laws.",
    },
    {
      step: 3,
      title: "Attend the Hearing",
      description:
        "The authorized attorney attends the hearing and presents the arguments to the Hearing Officer, answering any questions they may have.",
    },
    {
      step: 4,
      title: "Await the Officer's Decision",
      description:
        "After the hearing, the officer will issue an order. The order will either accept the mark for publication, maintain the objection and refuse the mark, or ask for more evidence.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Free",
      remarks:
        "There is no separate government fee for attending the scheduled hearing.",
    },
    {
      component: "Professional Fees",
      fees: "₹5,000 - ₹15,000",
      remarks:
        "This is the fee for a trademark attorney or agent to prepare for and attend the hearing on your behalf.",
    },
  ],
  faqs: [
    {
      q: "Can I attend the trademark hearing myself?",
      a: "While it is legally possible for an applicant to represent themselves, it is highly discouraged. Trademark hearings involve complex legal arguments and procedural knowledge, making representation by an experienced trademark attorney crucial for success.",
    },
    {
      q: "What happens if I miss the hearing date?",
      a: "If you or your representative fail to attend the hearing, the Hearing Officer will decide the case based on the documents on record. In most cases, this leads to the application being marked as 'Abandoned' or 'Refused'.",
    },
    {
      q: "What are common objections that lead to a hearing?",
      a: "The most common objections are under Section 9 (the mark is descriptive and not distinctive) and Section 11 (the mark is similar to an existing trademark on record). The hearing is to prove why your mark is, in fact, distinctive and not confusingly similar to others.",
    },
  ],
};
