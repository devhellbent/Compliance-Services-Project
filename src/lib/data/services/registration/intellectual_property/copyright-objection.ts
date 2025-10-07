// lib/data/services/copyright-objection.ts

import { ServiceData } from "@/lib/types";

export const copyrightObjectionData: ServiceData = {
  title: "Copyright Objection",
  breadcrumb: ["Home", "Intellectual Property", "Copyright Objection"],
  overview:
    "A **Copyright Objection** is a formal query or discrepancy raised by the Copyright Examiner during the examination of a copyright application. 🧐 It means the application has been temporarily halted and cannot proceed to registration until the applicant provides a satisfactory written reply addressing the examiner's concerns. An objection is not a rejection, but a request for clarification or further documentation.",
  advantages: [
    {
      icon: "MessageSquare",
      title: "Opportunity to Clarify",
      text: "It provides an opportunity to clarify any ambiguities or discrepancies in your original application.",
    },
    {
      icon: "FileCheck",
      title: "Present Legal Arguments",
      text: "Allows you to submit a well-reasoned legal argument to justify your claim of originality and ownership of the work.",
    },
    {
      icon: "FilePlus",
      title: "Submit Supporting Documents",
      text: "You can submit additional documents or evidence that were missed during the initial filing to strengthen your case.",
    },
    {
      icon: "ShieldCheck",
      title: "Prevents Rejection",
      text: "Filing a timely and effective reply is a necessary step to prevent your copyright application from being rejected and abandoned.",
    },
  ],
  disadvantages: [
    {
      icon: "Clock",
      title: "Delays the Registration Process",
      text: "An objection significantly extends the timeline for getting your copyright registered.",
    },
    {
      icon: "Gavel",
      title: "May Require Legal Expertise",
      text: "Drafting a convincing reply, especially for objections based on legal grounds, often requires the help of a legal professional.",
    },
    {
      icon: "AlertTriangle",
      title: "Risk of Rejection",
      text: "An inadequate or poorly drafted reply can lead to the final rejection of your copyright application.",
    },
  ],
  eligibility: [
    {
      title: "Who Receives an Objection?",
      items: [
        "Any applicant whose copyright application has been flagged by the examiner for discrepancies or issues during the examination phase.",
        "The objection letter is sent to the applicant or their authorized agent, detailing the reasons for the objection.",
      ],
    },
  ],
  documents: [
    {
      tabTitle: "For Filing a Reply",
      content: {
        title: "Essential Documents",
        items: [
          "A copy of the **Objection Letter** sent by the Copyright Office.",
          "A copy of the original application filed (Form XIV and Statement of Particulars).",
          "A well-drafted **written reply** addressing each objection point by point.",
          "Any supporting documentary evidence (e.g., NOCs, proof of publication, assignment deeds).",
        ],
      },
    },
  ],
  registrationProcess: [
    {
      step: 1,
      title: "Receive Objection Letter",
      description: "The Copyright Office sends a formal letter to the applicant detailing the grounds for the objection.",
    },
    {
      step: 2,
      title: "Analyze the Objection",
      description: "Carefully review the letter to understand the specific reasons for the objection, which could be related to documentation, similarity to existing works, or ownership claims.",
    },
    {
      step: 3,
      title: "Draft a Written Reply",
      description: "Prepare a detailed reply that systematically addresses each point raised by the examiner, supported by legal arguments and evidence.",
    },
    {
      step: 4,
      title: "File the Reply",
      description: "File the written reply with the Copyright Office within the stipulated time (usually 30 days).",
    },
    {
      step: 5,
      title: "Await Decision or Hearing",
      description: "If the examiner is satisfied with the reply, the application proceeds. If not, a hearing may be scheduled to present the case in person.",
    },
  ],
  fees: [
    {
      component: "Government Fee",
      fees: "Free",
      remarks: "There is no government fee for filing a reply to a copyright objection.",
    },
    {
      component: "Professional Fees",
      fees: "₹4,000 - ₹8,000",
      remarks: "For professional assistance in analyzing the objection and drafting a legally sound reply.",
    },
  ],
  faqs: [
    {
      q: "What are the common reasons for a copyright objection?",
      a: "Common reasons include: the work submitted is not original, there are similarities with an existing work in the database, the application form has incomplete or incorrect details, or the ownership documents (like NOCs) are missing.",
    },
    {
      q: "What happens if I don't reply to the objection within the given time?",
      a: "If you fail to file a reply within the stipulated period (usually 30 days), the application will be considered abandoned, and the registration process will be closed.",
    },
    {
      q: "Is a hearing always scheduled if the examiner is not satisfied with the reply?",
      a: "Not always, but it is common. If the examiner is not convinced by the written reply, they may schedule a hearing to give the applicant a final opportunity to present their case before making a final decision on the application.",
    },
  ],
};