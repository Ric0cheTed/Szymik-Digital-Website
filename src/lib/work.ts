export type Project = {
  title: string;
  label: "Client" | "Internal" | "Concept" | "Coming Soon";
  category: string;
  year: string;
  summary: string;
  problem: string;
  helpedWith: string[];
  outcome: string;
  note: string;
  liveUrl?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    title: "Libra Support Services website",
    label: "Client",
    category: "Local service website",
    year: "2026",
    summary:
      "A clearer service-led website foundation for a real local support business.",
    problem:
      "A real local support service business needed a clearer online foundation to explain services, build trust, and give people a practical route to get in touch.",
    helpedWith: [
      "Service-led website structure",
      "Local-business friendly copy and trust sections",
      "Clearer page flow for people reviewing care and support options",
    ],
    outcome:
      "A practical website foundation that presents the business more clearly and gives Szymik Digital a real example of its local service website approach.",
    note:
      "Real external website work referenced as practical proof. No performance metrics or testimonials are claimed here, and a live link should only be added when permission and the correct URL are confirmed.",
  },
  {
    title: "Szymik Digital marketing website",
    label: "Internal",
    category: "Brand website",
    year: "2026",
    summary:
      "The studio's own website, built to explain the offer and guide useful enquiries.",
    problem:
      "The studio needed its own public website to explain the offer clearly, show the current service pathways, and send enquiries into a simple review flow.",
    helpedWith: [
      "Positioning and message structure",
      "Responsive UI system and content hierarchy",
      "Service pages, work page, founder story, and enquiry flow",
    ],
    outcome:
      "A focused public website that explains what Szymik Digital does, guides visitors toward the right service pathway, and supports enquiry review before quoting.",
    note:
      "Internal project used to establish the studio's own digital foundation and public-facing offer. It is real internal work, not a paid client result.",
  },
  {
    title: "Szymik Digital client workflow foundation",
    label: "Internal",
    category: "Operations system",
    year: "2026",
    summary:
      "A manual enquiry-to-launch workflow foundation for calmer client delivery.",
    problem:
      "Early client work needed a calm manual process for enquiries, quotes, updates, feedback, approval, launch, and handover before adding automation.",
    helpedWith: [
      "Manual tracker and status rules",
      "Client email templates and Hannah-to-Ric handoff notes",
      "Quote, invoice, approval, folder, and runbook foundations",
    ],
    outcome:
      "A practical operating pack that helps Hannah coordinate communication and gives Ric clearer review points before scope, build, and launch decisions.",
    note:
      "Internal foundation work. It shows the kind of structured thinking Szymik Digital applies behind the scenes rather than a public client deliverable.",
  },
  {
    title: "Local service website concept",
    label: "Concept",
    category: "Brochure website concept",
    year: "2026",
    summary:
      "A concept showing how service-led pages can stay clear, useful, and easy to enquire from.",
    problem:
      "Many small service businesses need a simpler way to present services, proof, locations, and enquiry routes without making the website feel heavy.",
    helpedWith: [
      "Homepage and service page concept layout",
      "Clearer call-to-action flow for mobile and desktop",
      "Messaging structure aimed at trust and clarity",
    ],
    outcome:
      "A clear example of how Szymik Digital thinks about service-led pages, trust-building content, and practical enquiry flow.",
    note:
      "Concept work shown honestly to demonstrate approach without inventing a client, testimonial, or measurable result.",
  },
  {
    title: "More client examples",
    label: "Coming Soon",
    category: "Future case studies",
    year: "2026",
    summary:
      "A clearly labelled placeholder for future permissioned client examples.",
    problem:
      "Szymik Digital is still building its public proof base and will only publish client examples when permission, details, and accurate context are available.",
    helpedWith: [
      "Permissioned client examples when ready",
      "Clear problem, work delivered, and outcome notes",
      "No invented metrics, logos, testimonials, or case study claims",
    ],
    outcome:
      "A portfolio that grows honestly over time instead of using filler proof to look bigger than it is.",
    note:
      "Placeholder-style card, clearly labelled. It is not client work and does not claim a result.",
  },
];
