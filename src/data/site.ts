export interface HeroContent {
  headline: string;
  subheadline: string;
}

export interface CallToActions {
  callLink: string;
  whatsappLink: string;
}

export interface SafeStat {
  label: string;
  value: string;
  toneClass: string;
}

export interface TimelineAddition {
  id: string;
  title: string;
  period: string;
  status: "COMPLETED" | "ACTIVE" | "UPCOMING";
  type: "training" | "development" | "innovation";
  description: string;
  objectives: string[];
  technologies: string[];
}

export interface HirePackage {
  name: string;
  timeline: string;
  summary: string;
  scope: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export const siteEmail = "sajidnadeem2020@gmail.com";

export const heroContent: HeroContent = {
  headline: "I build fast, modern web apps + AI automations that increase leads and reduce support.",
  subheadline: "Conversion-first interfaces, smooth motion, and systems that make your business run smarter.",
};

export const ctaLinks: CallToActions = {
  callLink: "https://cal.com/your-link",
  whatsappLink: "https://wa.me/XXXXXXXXXXX",
};

export const safeStats: SafeStat[] = [
  { label: "Projects shipped", value: "10+", toneClass: "text-accent" },
  { label: "AI + Next.js apps", value: "Focused", toneClass: "text-green-400" },
  { label: "Fast MVP delivery", value: "48 hrs+", toneClass: "text-purple-400" },
  { label: "Actively building", value: "Now", toneClass: "text-white" },
];

export const timelineAdditions: TimelineAddition[] = [
  {
    id: "MSN-007",
    title: "Freelance / Client Work",
    period: "2024 - Present",
    status: "ACTIVE",
    type: "development",
    description: "Client-facing builds focused on conversion and automation.",
    objectives: [
      "Landing pages with lead capture",
      "Automation workflows for faster follow-ups",
      "Performance tuning for smooth UX",
    ],
    technologies: ["Next.js", "TypeScript", "Vercel", "Automation"],
  },
  {
    id: "MSN-008",
    title: "Shipped MVP / Product",
    period: "2024",
    status: "COMPLETED",
    type: "innovation",
    description: "Launched an MVP with AI-powered content workflows.",
    objectives: [
      "Rapid product validation",
      "AI-assisted content generation",
      "Integrated analytics for iteration",
    ],
    technologies: ["Next.js", "AI APIs", "Analytics"],
  },
];

export const hirePackages: HirePackage[] = [
  {
    name: "Starter",
    timeline: "48 hours",
    summary: "Landing page + lead form + email alerts",
    scope: ["High-converting landing page", "Lead capture form", "Email notifications setup"],
  },
  {
    name: "Standard",
    timeline: "3 days",
    summary: "AI FAQ/chat + lead capture + basic automation",
    scope: ["AI FAQ or chat experience", "Lead capture integration", "Basic workflow automation"],
  },
  {
    name: "Premium",
    timeline: "5–7 days",
    summary: "Integrations (Sheets/CRM/helpdesk) + custom workflow",
    scope: ["Custom integrations (Sheets/CRM/helpdesk)", "Automation workflows", "Launch support"],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/RehanSajid136602" },
  { label: "LinkedIn", href: "" },
  { label: "Twitter", href: "" },
];
