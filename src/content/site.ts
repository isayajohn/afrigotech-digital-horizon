import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Clock3,
  CreditCard,
  Globe,
  GraduationCap,
  HeartHandshake,
  LayoutTemplate,
  MapPin,
  MessageSquareMore,
  Phone,
  School,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import heroTeam from "@/assets/hero-team.jpg";
import heroStudent from "@/assets/hero-student.jpg";
import heroCollaboration from "@/assets/hero-collaboration.jpg";
import heroWorkspace from "@/assets/hero-workspace.jpg";
import aminaPhoto from "@/assets/testimonials/amina-hassan.jpg";
import johnPhoto from "@/assets/testimonials/john-mwakasege.jpg";
import gracePhoto from "@/assets/testimonials/grace-kimaro.jpg";
import neemaLogo from "@/assets/partners/neema-logo.png";
import azamPesaLogo from "@/assets/partners/azam-pesa-logo.png";
import zenoPayLogo from "@/assets/partners/zeno-pay-logo.svg";
import nextSmsLogo from "@/assets/partners/next-sms-logo.png";
import isayaPhoto from "@/assets/team/isaya-kapama.jpg";
import benjaminPhoto from "@/assets/team/benjamin-athanas.jpg";
import mosesPhoto from "@/assets/team/moses-nyatega.jpg";

export interface NavLink {
  path: string;
  label: string;
}

export interface Metric {
  value: string;
  label: string;
  detail?: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

export interface CaseStudy {
  title: string;
  category: string;
  description: string;
  impact: string;
  metrics: Metric[];
  link: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  feedback: string;
  photo: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
  focus: string;
  links: {
    linkedin: string;
    email: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

export const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/team", label: "Team" },
  { path: "/career", label: "Careers" },
  { path: "/contact", label: "Contact" },
];

export const heroGallery = [
  { src: heroTeam, alt: "Afrigotech team collaborating" },
  { src: heroWorkspace, alt: "Digital workspace and product strategy" },
  { src: heroStudent, alt: "Students supported by digital tools" },
  { src: heroCollaboration, alt: "Afrigotech working session" },
];

export const homeMetrics: Metric[] = [
  { value: "50+", label: "schools supported", detail: "active deployments across Tanzania" },
  { value: "10K+", label: "students reached", detail: "through school and payment products" },
  { value: "3 yrs", label: "delivery rhythm", detail: "shipping, measuring, and improving" },
  { value: "100%", label: "client focus", detail: "built around adoption and long-term value" },
];

export const trustMetrics: Metric[] = [
  { value: "5.0", label: "client sentiment", detail: "consistent delivery and strong support" },
  { value: "24h", label: "response window", detail: "fast follow-up for demos and enquiries" },
  { value: "4", label: "core service lines", detail: "strategy, software, growth, and support" },
  { value: "2022", label: "founded in Dodoma", detail: "built for African education and business" },
];

export const services: FeatureItem[] = [
  {
    icon: CreditCard,
    title: "Smart card payments",
    description:
      "Cashless student payments, secure identification, and easier finance operations for school teams and parents.",
    features: [
      "Azam Pay-powered payment workflows",
      "Real-time transaction visibility",
      "Safer campus fee collection",
    ],
  },
  {
    icon: School,
    title: "School operations software",
    description:
      "Shule Kiganjani centralizes student records, attendance, communication, and reporting in one operational system.",
    features: [
      "Administration and staff workflows",
      "Academic reporting and attendance",
      "Parent communication touchpoints",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile product development",
    description:
      "Custom Android and iOS apps designed around real adoption, clean UX, and long-term maintainability.",
    features: [
      "Cross-platform and native builds",
      "User-focused interaction design",
      "Cloud-ready architecture",
    ],
  },
  {
    icon: Globe,
    title: "Web platforms and portals",
    description:
      "Modern web experiences for education, nonprofits, and businesses that need clarity, speed, and credibility online.",
    features: [
      "Responsive product interfaces",
      "CMS and integration work",
      "Scalable frontend systems",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training and enablement",
    description:
      "Digital adoption support, workshops, and practical guidance so teams can use technology with confidence.",
    features: [
      "Onboarding and team training",
      "Transformation consulting",
      "Ongoing support and advisory",
    ],
  },
  {
    icon: BarChart3,
    title: "Product strategy and optimisation",
    description:
      "We connect execution to measurable outcomes with tighter feedback loops, clearer KPIs, and better product decisions.",
    features: [
      "Discovery and prioritisation",
      "Delivery roadmaps",
      "Usage and impact reviews",
    ],
  },
];

export const capabilityPillars = [
  {
    icon: Target,
    title: "Business-first strategy",
    description: "We translate goals into practical roadmaps, milestones, and measurable digital outcomes.",
  },
  {
    icon: LayoutTemplate,
    title: "Clear product design",
    description: "Interfaces are structured to feel modern, easy to navigate, and dependable for everyday users.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description: "We focus on adoption, implementation quality, and support after launch instead of surface polish alone.",
  },
];

export const partnerLogos = [
  { name: "Neema Gospel", logo: neemaLogo },
  { name: "Azam Pesa", logo: azamPesaLogo },
  { name: "Zeno Pay", logo: zenoPayLogo },
  { name: "Next SMS", logo: nextSmsLogo },
];

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Amina Hassan",
    role: "Principal",
    company: "St. Mary's Secondary School",
    feedback:
      "Afrigotech helped us modernize payments without overwhelming our team. Parents trust the process and staff spend far less time on manual follow-up.",
    photo: aminaPhoto,
  },
  {
    name: "John Mwakasege",
    role: "ICT Coordinator",
    company: "Dodoma International School",
    feedback:
      "Shule Kiganjani gave us structure. Reporting, communication, and day-to-day administration now feel connected instead of fragmented.",
    photo: johnPhoto,
  },
  {
    name: "Grace Kimaro",
    role: "Director",
    company: "Mwanza Education Foundation",
    feedback:
      "The team listened well, moved quickly, and kept the project grounded in what our users actually needed. That made the rollout much smoother.",
    photo: gracePhoto,
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Shule Kiganjani",
    category: "School management platform",
    description:
      "A single operations platform for school administration, attendance, communication, and academic reporting.",
    impact: "Created a more connected daily operating model for schools scaling beyond manual administration.",
    metrics: [
      { value: "50+", label: "schools onboarded" },
      { value: "10K+", label: "student records supported" },
      { value: "40%", label: "less admin time" },
    ],
    link: "https://shulekiganjani.com",
  },
  {
    title: "Smart Student Card",
    category: "Cashless payments and identity",
    description:
      "A secure campus payment and identification system that reduces cash handling and gives parents better visibility.",
    impact: "Turned routine school finance processes into a faster and safer digital flow.",
    metrics: [
      { value: "Real-time", label: "transaction tracking" },
      { value: "Safer", label: "campus payment flow" },
      { value: "Better", label: "parent convenience" },
    ],
    link: "https://afrigotech.com",
  },
  {
    title: "Iarise AAC",
    category: "Assistive communication product",
    description:
      "A communication support app designed to help users with speech difficulties express themselves more effectively.",
    impact: "Expanded accessibility with a purpose-built mobile experience and inclusive interaction patterns.",
    metrics: [
      { value: "Accessible", label: "interaction model" },
      { value: "Custom", label: "interface options" },
      { value: "Multi", label: "language support" },
    ],
    link: "https://iarise.app",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand the context",
    description: "We learn how your organisation works, where friction lives, and which outcomes matter most.",
  },
  {
    number: "02",
    title: "Shape the solution",
    description: "We define scope, flow, and priorities so design and development move with clarity.",
  },
  {
    number: "03",
    title: "Build and launch",
    description: "We deliver the product with a strong focus on usability, reliability, and rollout readiness.",
  },
  {
    number: "04",
    title: "Measure and improve",
    description: "We keep refining the experience using feedback, adoption signals, and operational learnings.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Isaya Kapama",
    role: "Co-Founder & CTO",
    bio: "Leads product and technical direction, turning education and community challenges into practical digital systems.",
    photo: isayaPhoto,
    focus: "Architecture, product strategy, engineering quality",
    links: {
      linkedin: "https://linkedin.com/in/isaya-kapama",
      email: "isaya@afrigotech.com",
    },
  },
  {
    name: "Benjamin Athanas",
    role: "Head of Tech",
    bio: "Owns implementation detail and product execution across web, mobile, and systems integration work.",
    photo: benjaminPhoto,
    focus: "Full-stack delivery, platform execution, systems thinking",
    links: {
      linkedin: "https://linkedin.com/in/benjamin-athanas",
      email: "benjamin@afrigotech.com",
    },
  },
  {
    name: "Moses Nyatega",
    role: "Head of Marketing",
    bio: "Connects Afrigotech’s solutions to the right audiences with messaging focused on clarity, trust, and growth.",
    photo: mosesPhoto,
    focus: "Go-to-market strategy, positioning, growth communication",
    links: {
      linkedin: "https://linkedin.com/in/moses-nyatega",
      email: "moses@afrigotech.com",
    },
  },
];

export const aboutMilestones = [
  { year: "2022", event: "Afrigotech was founded in Dodoma with a focus on digital transformation for schools." },
  { year: "2023", event: "Shule Kiganjani launched to streamline administration and strengthen communication." },
  { year: "2023", event: "Smart card services went live with Azam Pay integration for cashless campus workflows." },
  { year: "2024", event: "Delivery expanded to more schools and organisations across Tanzania." },
  { year: "2025", event: "The team broadened product work into assistive technology with Iarise AAC." },
];

export const cultureValues = [
  {
    icon: Sparkles,
    title: "Meaningful innovation",
    description: "We build around real adoption and usefulness, not novelty for its own sake.",
  },
  {
    icon: HeartHandshake,
    title: "Human collaboration",
    description: "Clients work with a partner who explains decisions clearly and stays close to the problem.",
  },
  {
    icon: CheckCircle2,
    title: "Measured outcomes",
    description: "We care about clarity, trust, and the value delivered after launch.",
  },
];

export const jobListings: JobListing[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Dar es Salaam, Tanzania",
    type: "Full-time",
    description:
      "Help us build dependable web and mobile systems for schools, businesses, and mission-driven organisations.",
    requirements: [
      "3+ years with React and Node.js",
      "Solid database and API design skills",
      "Comfort working across product and engineering conversations",
      "Strong debugging and delivery discipline",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Dar es Salaam, Tanzania",
    type: "Full-time",
    description:
      "Design clear, modern interfaces that feel confident, intuitive, and grounded in real user workflows.",
    requirements: [
      "2+ years in product design",
      "Strong Figma craft and structured design thinking",
      "Portfolio showing systems and interaction detail",
      "Comfort collaborating closely with engineers",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Dar es Salaam, Tanzania",
    type: "Full-time",
    description:
      "Shape campaigns, positioning, and growth communication that connect our work to the right audiences.",
    requirements: [
      "2+ years in digital marketing",
      "SEO, paid media, and social planning experience",
      "Analytical mindset with strong communication",
      "Ability to turn insight into action",
    ],
  },
  {
    id: 4,
    title: "Project Manager",
    department: "Operations",
    location: "Dar es Salaam, Tanzania",
    type: "Full-time",
    description:
      "Guide multidisciplinary digital projects from discovery to delivery with strong structure and calm execution.",
    requirements: [
      "3+ years in project management",
      "Experience with Agile delivery environments",
      "Clear stakeholder communication",
      "Ability to coordinate scope, quality, and timelines",
    ],
  },
];

export const contactInfo = [
  { icon: MapPin, title: "Visit us", content: "Area C, Dodoma, Tanzania" },
  { icon: Phone, title: "Call us", content: "+255 743 871 360", link: "tel:+255743871360" },
  { icon: MessageSquareMore, title: "Email us", content: "info@afrigotech.com", link: "mailto:info@afrigotech.com" },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/afrigotech" },
  { label: "Instagram", href: "https://instagram.com/afrigotech" },
  { label: "Facebook", href: "https://facebook.com/afrigotech" },
];

export const demoHighlights = [
  {
    icon: Clock3,
    title: "Fast scheduling",
    description: "We usually follow up within one business day and work around your team’s availability.",
  },
  {
    icon: Users,
    title: "Relevant walkthrough",
    description: "The session is tailored to your actual workflows, not a generic product tour.",
  },
  {
    icon: Briefcase,
    title: "Implementation clarity",
    description: "We cover rollout, support, and the practical steps needed to move forward confidently.",
  },
  {
    icon: ArrowUpRight,
    title: "Clear next steps",
    description: "You leave with a clearer view of fit, timing, and how the solution can create impact.",
  },
];
