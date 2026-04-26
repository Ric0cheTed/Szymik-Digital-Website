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
    enquiry: "Prepare enquiry email",
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
  includes: string[];
  fit: string;
};

export const services: Service[] = [
  {
    id: "website-design-build",
    shortLabel: "New build",
    title: "Website Design & Build",
    teaser:
      "New websites planned around the offer, the content, and the enquiry path rather than a template-first approach.",
    description:
      "For businesses that need a website from the ground up. The work starts by getting clear on the offer, the structure, and the actions the site needs to support, then moves into a modern, responsive build that feels credible and easy to use.",
    includes: [
      "Page structure and content flow",
      "Design direction and responsive UI build",
      "Copy guidance and clearer calls to action",
      "Launch support and tidy finishing details",
    ],
    fit: "A strong fit when the business needs a clean new foundation rather than trying to stretch an old site further.",
  },
  {
    id: "website-redesign",
    shortLabel: "Redesign",
    title: "Website Redesign",
    teaser:
      "A clearer structure, stronger presentation, and better flow for sites that no longer match the business.",
    description:
      "For existing websites that feel dated, too busy, hard to navigate, or simply no longer representative of the business. Redesign work focuses on clarity before decoration so the finished site feels sharper and easier to understand.",
    includes: [
      "Review of the current site and what is getting in the way",
      "Content restructuring and cleaner page hierarchy",
      "Refreshed design system and updated visuals",
      "Improved navigation and stronger enquiry routes",
    ],
    fit: "Best when the current site is still useful as a starting point, but no longer does the business justice.",
  },
  {
    id: "local-business-websites",
    shortLabel: "Local",
    title: "Local Business Websites",
    teaser:
      "Credible, mobile-friendly sites for service businesses that need to explain what they do and make contact easy.",
    description:
      "A focused offer for local and regional businesses that need a straightforward, trustworthy web presence. The goal is to help people understand the service quickly, build confidence, and make the next step obvious.",
    includes: [
      "Service-led pages with clear structure",
      "Local trust content, contact points, and practical details",
      "Mobile-first layouts for real-world browsing",
      "Simple enquiry routes that reduce friction",
    ],
    fit: "Ideal for trades, support services, consultants, clinics, and other service-led businesses that rely on clear first impressions.",
  },
  {
    id: "digital-presence-cleanup",
    shortLabel: "Cleanup",
    title: "Digital Presence Cleanup",
    teaser:
      "A practical tidy-up for businesses whose website, messaging, profiles, and contact points have drifted out of sync.",
    description:
      "Sometimes the issue is not just one page. It is a wider digital presence that has become inconsistent over time. Cleanup work focuses on the messy details that quietly weaken trust: outdated wording, mismatched information, broken links, scattered assets, and unclear positioning.",
    includes: [
      "Review of website messaging and key pages",
      "Consistency checks across contact points and profiles",
      "Removal of outdated, duplicated, or conflicting information",
      "Clearer direction on what should stay, change, or be retired",
    ],
    fit: "Best when the business has evolved but the digital presence has not kept pace.",
  },
  {
    id: "digital-systems-automation",
    shortLabel: "Systems",
    title: "Digital Systems & Automation",
    teaser:
      "Practical workflows that reduce repetitive admin and make the business easier to run behind the scenes.",
    description:
      "This work is about useful systems rather than flashy automation for its own sake. The aim is to remove avoidable friction, reduce repeat tasks, and create smoother handoffs around enquiries, follow-up, internal admin, or routine communication.",
    includes: [
      "Simple enquiry and follow-up workflows",
      "Lightweight automation opportunities mapped to real problems",
      "Clearer internal process design and handoffs",
      "Practical recommendations that stay manageable long term",
    ],
    fit: "A good fit when too much manual work is being repeated or passed between tools and people without a clear system.",
  },
  {
    id: "ongoing-support",
    shortLabel: "Support",
    title: "Ongoing Support",
    teaser:
      "Steady help after launch for updates, improvements, tidy-ups, and the next practical steps.",
    description:
      "Not every change needs a full project. Ongoing support keeps the site and surrounding setup moving forward, whether that means new pages, content updates, design refinements, small features, or wider digital tidy-ups after launch.",
    includes: [
      "Content updates and landing page additions",
      "Design refinements and small feature improvements",
      "Technical tidy-ups and practical problem solving",
      "Flexible support without a bloated retainer structure",
    ],
    fit: "Useful for businesses that want a dependable partner after launch without overcomplicating the arrangement.",
  },
];
