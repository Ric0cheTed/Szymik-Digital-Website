const primaryEmail = "szymikdigital@gmail.com";
const secondaryEmail = "";

export const siteSettings = {
  businessName: "Szymik Digital",
  founderName: 'Richard "Ric" Szymik',
  founderShortName: "Ric",
  founderRole: "Founder",
  tagline: "Lean digital studio for small businesses",
  locationText: "Todmorden, West Yorkshire - UK-based and remote-friendly",
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
    services: "View services",
    work: "View work",
    conversation: "Start a conversation",
    enquiry: "Open email draft",
  },
  meta: {
    defaultTitle:
      "Szymik Digital | Websites and local visibility for small businesses",
    defaultDescription:
      "Szymik Digital helps small businesses look sharper online, get found locally, and build practical digital systems when they need more than a brochure site.",
    openGraphAlt:
      "Szymik Digital branded social preview for small business websites, local visibility, and practical digital systems.",
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
};

export const services: Service[] = [
  {
    id: "website-refresh",
    shortLabel: "Refresh",
    title: "Website Refresh",
    teaser:
      "A focused improvement path for existing websites that feel dated, unclear, inconsistent, or harder to use than they should be.",
    description:
      "A practical refresh helps make an existing website clearer, more trustworthy, and easier for local customers to act on without forcing a full rebuild too early.",
    bestFor:
      "Small businesses with an existing site that needs clearer messaging, stronger trust, better structure, or practical fixes.",
    problem:
      "The site no longer reflects the quality of the business, the offer is hard to understand, or the enquiry path is weaker than it should be.",
    includes: [
      "Website review and practical improvement priorities",
      "Messaging, structure, and call-to-action improvements where in scope",
      "Basic technical, usability, and local visibility checks",
      "Clear next-step recommendations if a larger rebuild is needed later",
    ],
    outcome:
      "A clearer, more useful website and a practical view of what should be improved next.",
  },
  {
    id: "starter-website",
    shortLabel: "Starter",
    title: "Starter Website",
    teaser:
      "A lean, credible website for small businesses that need to explain what they do and make enquiries easy.",
    description:
      "A Starter Website gives the business a clean foundation: clear positioning, core service information, trust signals, and a simple path for people to get in touch.",
    bestFor:
      "New or small businesses that need a professional web presence without a large, complex site.",
    problem:
      "The business needs somewhere credible to send prospects, but does not yet need a deep content strategy or advanced functionality.",
    includes: [
      "Lean website structure around the main offer",
      "Core service information and trust signals",
      "Responsive build with a clear contact or enquiry path",
      "Basic technical hygiene and simple handover guidance",
    ],
    outcome:
      "A professional website that explains the business, builds trust, and gives prospects a clear next step.",
  },
  {
    id: "local-growth",
    shortLabel: "Local growth",
    title: "Local Growth Website",
    teaser:
      "A stronger website foundation for service-led businesses that need clearer pages, local relevance, and better enquiry flow.",
    description:
      "A Local Growth Website is for businesses that need more than a brochure site: clearer service pages, stronger trust sections, and local visibility foundations that support real enquiries.",
    bestFor:
      "Small local service businesses with clear offers, local competition, and a need to be easier to find and trust.",
    problem:
      "Potential customers cannot quickly understand the services, local relevance, proof, or best way to enquire.",
    includes: [
      "Website structure around core services",
      "Service pages or service sections with clearer calls to action",
      "Local relevance content where appropriate",
      "Trust, proof, and basic local SEO foundations",
    ],
    outcome:
      "A stronger local website foundation for visibility, service clarity, trust, and enquiry generation.",
  },
  {
    id: "automation-tools",
    shortLabel: "Systems",
    title: "Automation / Custom Tool Discovery",
    teaser:
      "A discovery-led path for businesses that have outgrown spreadsheets, manual admin, or basic enquiry forms.",
    description:
      "Automation and custom tools come after the website foundation when a business has a repeated workflow problem worth understanding properly before anything gets built.",
    bestFor:
      "Businesses with a specific repeated workflow problem, such as manual admin, scattered tracking, repeated reporting, or inconsistent client handling.",
    problem:
      "Too much repeated work is being handled manually or passed between disconnected tools without a clear process.",
    includes: [
      "Workflow discovery and problem definition",
      "Current process mapping",
      "Opportunity assessment and scope recommendation",
      "Build estimate if a tool or automation is justified",
    ],
    outcome:
      "A clear decision on whether automation or a custom tool is worth building, what it should do, and what it is likely to involve.",
  },
];
