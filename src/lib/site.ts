const primaryEmail = "szymikdigital@gmail.com";
const secondaryEmail = "";

export const siteSettings = {
  businessName: "Szymik Digital",
  founderName: 'Richard "Ric" Szymik',
  founderShortName: "Ric",
  founderRole: "Founder",
  tagline: "Practical websites and digital support for small businesses",
  locationText:
    "Based in Todmorden, West Yorkshire - UK-based and remote-friendly",
  siteUrl: "https://szymikdigital.co.uk",
  language: "en-GB",
  locale: "en_GB",
  brandAssets: {
    logoHorizontal: {
      src: "/brand/logo-horizontal.png",
      width: 845,
      height: 165,
    },
    logoStacked: {
      src: "/brand/logo-stacked.png",
      width: 353,
      height: 191,
    },
    logoMark: {
      src: "/brand/logo-mark.png",
      width: 221,
      height: 165,
    },
    favicon: {
      src: "/brand/favicon-mark-512.png",
      width: 512,
      height: 512,
    },
    appIconLight: {
      src: "/brand/app-icon-light-512.png",
      width: 512,
      height: 512,
    },
    appIconDark: {
      src: "/brand/app-icon-dark-512.png",
      width: 512,
      height: 512,
    },
  },
  emails: {
    primary: primaryEmail,
    secondary: secondaryEmail,
    project: secondaryEmail || primaryEmail,
  },
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/richard-szymik-8ab0b6402",
      handle: "richard-szymik-8ab0b6402",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61563233609513",
      handle: "61563233609513",
    },
  ],
  ctaLabels: {
    primary: "Start a project",
    services: "Explore services",
    work: "View our work",
    conversation: "Tell us what you need",
    enquiry: "Send an enquiry",
  },
  meta: {
    defaultTitle:
      "Szymik Digital | Practical websites for small local businesses",
    defaultDescription:
      "Website refreshes, starter websites, local growth websites, and practical digital support for small businesses. Based in Todmorden, West Yorkshire, working UK-wide.",
    openGraphAlt:
      "Szymik Digital branded social preview for practical small-business websites, local growth support, and digital systems.",
  },
  legal: {
    lastUpdatedDisplay: "24 April 2026",
    lastUpdatedIso: "2026-04-24",
    businessDescription:
      'Szymik Digital is the public brand used by Richard "Ric" Szymik for founder-led website, digital presence, and practical systems work.',
    privacyContact: primaryEmail,
    quoteValidity:
      "Quotes are normally valid for 14 days unless a different period is stated in writing.",
    defaultDeposit:
      "A 50% deposit is normally required before project work begins unless agreed otherwise in writing.",
    governingLaw:
      "These Terms are governed by the laws of England and Wales unless a separate written agreement says otherwise.",
  },
} as const;

export const siteName = siteSettings.businessName;
export const contactEmail = siteSettings.emails.primary;
export const secondaryContactEmail = siteSettings.emails.secondary;
export const enquiryEmail = siteSettings.emails.project;

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const footerNavigation = [
  ...primaryNavigation,
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export const activeSocialLinks = siteSettings.socialLinks.filter((link) =>
  Boolean(link.href),
);

export type Service = {
  id: string;
  shortLabel: string;
  title: string;
  teaser: string;
  description: string;
  bestFor: string;
  problem: string;
  includes: string[];
  outcome: string;
  nextStep: string;
};

export type PricingGuidance = {
  serviceId: Service["id"];
  title: string;
  bestFit: string;
  startingFrom: string;
  priceFactors: string[];
  afterEnquiry: string;
};

export const services: Service[] = [
  {
    id: "website-refresh",
    shortLabel: "Refresh",
    title: "Website Refresh",
    teaser:
      "A focused improvement path for existing websites that feel dated, unclear, inconsistent, or harder to use than they should be.",
    description:
      "A Website Refresh is for businesses that already have a website, but know it is not doing enough. The aim is to improve clarity, trust, structure, and enquiry flow without forcing a rebuild too early.",
    bestFor:
      "Small local businesses, sole traders, trades, care/support providers, or local organisations with an existing site that still has value, but needs clearer messaging, stronger trust, better structure, or practical fixes.",
    problem:
      "The site feels dated, confusing, inconsistent, or weaker than the business behind it. Visitors may struggle to understand the offer or find the right way to enquire.",
    includes: [
      "Website review and practical improvement priorities",
      "Messaging, page structure, and call-to-action improvements where in scope",
      "Trust, usability, and local visibility checks",
      "Clear recommendations if a deeper rebuild or later phase would be better",
    ],
    outcome:
      "A clearer, more useful website with a better enquiry path and a practical view of what should be improved next.",
    nextStep:
      "Send an enquiry with your current website link and what feels outdated, unclear, or hard for customers to use.",
  },
  {
    id: "starter-website",
    shortLabel: "Starter",
    title: "Starter Website",
    teaser:
      "A lean, credible website for small businesses that need to explain what they do and make enquiries easy.",
    description:
      "A Starter Website gives a small business a clean first foundation online: clear positioning, core service information, trust signals, and a simple contact path.",
    bestFor:
      "New or small businesses, sole traders, and local organisations that need a professional web presence without a large content-heavy site or advanced functionality.",
    problem:
      "The business needs somewhere credible to send prospects, explain the offer, and make contact easy without relying only on social profiles or referrals.",
    includes: [
      "Lean website structure around the main offer",
      "Core service information, contact details, and trust signals",
      "Responsive build with a clear contact or enquiry path",
      "Basic technical hygiene and simple handover guidance",
    ],
    outcome:
      "A professional first website that explains the business, builds trust, and gives prospects a clear next step.",
    nextStep:
      "Send an enquiry with what the business does, the pages you think you need, your timescale, and any logo or content you already have.",
  },
  {
    id: "local-growth",
    shortLabel: "Local growth",
    title: "Local Growth Website",
    teaser:
      "A stronger website foundation for service-led businesses that need clearer pages, local relevance, and better enquiry flow.",
    description:
      "A Local Growth Website is for service-led businesses that need more than a simple brochure site: clearer services, local relevance, trust content, and stronger enquiry routes.",
    bestFor:
      "Small local service businesses, trades, care/support providers, clinics, consultants, and appointment-led teams that need to be easier to find, understand, and trust.",
    problem:
      "Potential customers cannot quickly see the services, locations or service area, proof, or best way to make the right enquiry.",
    includes: [
      "Website structure around core services and service areas",
      "Service pages or service sections with clearer calls to action",
      "Local relevance content where appropriate",
      "Trust, proof, and basic local SEO foundations",
    ],
    outcome:
      "A stronger local website foundation for visibility, service clarity, trust, and better-quality enquiries.",
    nextStep:
      "Send an enquiry with your main services, location or service area, current website if you have one, and what local customers need to understand faster.",
  },
  {
    id: "automation-tools",
    shortLabel: "Systems",
    title: "Automation / Custom Tool Discovery",
    teaser:
      "A discovery-led path for businesses that have outgrown spreadsheets, manual admin, or basic enquiry forms.",
    description:
      "Automation and custom tool work starts with discovery, not a build promise. It is for repeated workflow problems that need to be understood before any tool is scoped.",
    bestFor:
      "Businesses with a specific repeated workflow problem, such as manual admin, scattered tracking, repeated reporting, follow-up gaps, or inconsistent client handling.",
    problem:
      "Too much repeated work is handled manually, copied between disconnected tools, or kept in someone's head instead of a clear process.",
    includes: [
      "Workflow discovery and problem definition",
      "Current process mapping",
      "Opportunity assessment and scope recommendation",
      "Build estimate only if a tool or automation is justified",
    ],
    outcome:
      "A clear decision on whether automation or a custom tool is worth building, what it should do, and what it is likely to involve.",
    nextStep:
      "Send an enquiry with the workflow problem, the tools you use now, what gets repeated, and where things currently get stuck.",
  },
];

export const pricingGuidance: PricingGuidance[] = [
  {
    serviceId: "website-refresh",
    title: "Website Refresh",
    bestFit:
      "Existing small-business websites that need focused improvements before considering a full rebuild.",
    startingFrom: "Starting from GBP 750 for a focused review or improvement sprint.",
    priceFactors: [
      "Number of pages or sections to review",
      "How much copy, layout, or technical cleanup is needed",
      "Whether changes are advisory, implemented, or split into phases",
    ],
    afterEnquiry:
      "Send the current website link and what feels unclear. The reply will confirm whether a refresh, audit, or rebuild path makes more sense.",
  },
  {
    serviceId: "starter-website",
    title: "Starter Website",
    bestFit:
      "New or small local businesses that need a credible first website and a simple enquiry route.",
    startingFrom: "Starting from GBP 1,500 for a lean, agreed-scope website foundation.",
    priceFactors: [
      "Page count and content readiness",
      "Logo, imagery, and brand asset quality",
      "Any extra forms, booking links, or third-party setup",
    ],
    afterEnquiry:
      "Share what the business does, the pages you expect, rough timescale, and any content already available. A written quote confirms the exact scope.",
  },
  {
    serviceId: "local-growth",
    title: "Local Growth Website",
    bestFit:
      "Service-led local businesses that need clearer service pages, trust content, and local visibility foundations.",
    startingFrom: "Starting from GBP 2,500 for a structured local website project.",
    priceFactors: [
      "Number of services, locations, or service-area pages",
      "Copywriting and content support needed",
      "Local SEO foundations, proof sections, and launch requirements",
    ],
    afterEnquiry:
      "Send the main services, area covered, current site if you have one, and what customers need to understand faster. Scope is agreed before build starts.",
  },
  {
    serviceId: "automation-tools",
    title: "Automation / Custom Tool Discovery",
    bestFit:
      "Businesses with a repeated admin or workflow problem that needs scoping before anything is built.",
    startingFrom: "Discovery usually starts from GBP 450 before any build is quoted.",
    priceFactors: [
      "How clearly the workflow is already understood",
      "Number of tools, people, or handoffs involved",
      "Whether the outcome is advice, a workflow plan, or a later build quote",
    ],
    afterEnquiry:
      "Explain what gets repeated, which tools are involved, and where work gets stuck. Ric reviews whether discovery or a simpler fix is the right next step.",
  },
];
