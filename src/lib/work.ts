export type Project = {
  title: string;
  label: "Internal" | "Concept";
  category: string;
  year: string;
  summary: string;
  scope: string[];
  note: string;
};

export const projects: Project[] = [
  {
    title: "Szymik Digital marketing website",
    label: "Internal",
    category: "Brand website",
    year: "2026",
    summary:
      "The studio's own marketing website, designed to turn an approved brand direction into a clear, scalable set of pages for services, work, and project enquiries.",
    scope: [
      "Positioning and message structure",
      "Responsive UI system and content hierarchy",
      "Service pages, work page, founder story, and enquiry flow",
    ],
    note:
      "Internal project used to establish the studio's own digital foundation and public-facing offer.",
  },
  {
    title: "Local service website concept",
    label: "Concept",
    category: "Brochure website",
    year: "2026",
    summary:
      "A concept project exploring how a local service business could present services more clearly, reduce clutter, and guide visitors toward a stronger enquiry path.",
    scope: [
      "Homepage and service page concept layout",
      "Clearer call-to-action flow for mobile and desktop",
      "Messaging structure aimed at trust and clarity",
    ],
    note:
      "Concept work shown honestly to demonstrate approach without inventing a client or outcomes that do not exist.",
  },
  {
    title: "Digital presence audit framework",
    label: "Internal",
    category: "Cleanup system",
    year: "2026",
    summary:
      "An internal framework used to review websites, contact points, messaging consistency, and small operational bottlenecks before recommending a redesign or cleanup plan.",
    scope: [
      "Audit checklist for online touchpoints and messaging drift",
      "Priority mapping for fixes, removals, and next steps",
      "Practical recommendations tied to real business friction",
    ],
    note:
      "Internal working system that supports discovery and cleanup conversations without overstating what has been shipped publicly.",
  },
  {
    title: "Website redesign planning canvas",
    label: "Internal",
    category: "Planning tool",
    year: "2026",
    summary:
      "A structured planning canvas used to define what stays, what changes, and what a redesigned site genuinely needs before design and build work begins.",
    scope: [
      "Page priority mapping and content gap review",
      "Decision points for calls to action, structure, and scope",
      "Launch-minded planning for simpler delivery",
    ],
    note:
      "Internal planning asset used to keep redesign work grounded before development starts.",
  },
];
