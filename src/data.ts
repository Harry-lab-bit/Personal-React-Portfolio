import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiWordpress,
  SiWoocommerce,
  SiPostgresql,
  SiRedis,
  SiCelery,
  SiOpenai,
} from "react-icons/si";
import { TbApi, TbCreditCard, TbBuildingStore } from "react-icons/tb";
import type { IconType } from "react-icons";

export const profile = {
  name: "Haroon Ali",
  role: "Full Stack Developer",
  tagline:
    "I build robust, secure, and user-focused web applications — from pixel-perfect React frontends to scalable Django backends.",
  about:
    "Result-oriented Full Stack Developer specializing in building robust, secure, and user-focused web applications. Expert in modern frameworks like React, Django, and REST APIs, with a strong focus on seamless frontend-backend integration and scalable database management. Dedicated to delivering efficient solutions that align with business goals.",
  email: "malikharoonu68@gmail.com",
  phone: "03274414649",
  location: "Pakistan",
  linkedin: "https://www.linkedin.com/in/haroon-ali-1a06a329b/",
  github: "https://github.com/Harry-lab-bit",
};

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Client Focus" },
];

export type Skill = { name: string; level: number; icon: IconType };

export const skills: Skill[] = [
  { name: "React.ts", level: 88, icon: SiReact },
  { name: "TypeScript", level: 85, icon: SiTypescript },
  { name: "JavaScript", level: 87, icon: SiJavascript },
  { name: "Python", level: 85, icon: SiPython },
  { name: "Django", level: 86, icon: SiDjango },
  { name: "Django REST Framework", level: 85, icon: TbApi },
  { name: "REST API", level: 88, icon: TbApi },
  { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
  { name: "Bootstrap", level: 82, icon: SiBootstrap },
  { name: "HTML5", level: 92, icon: SiHtml5 },
  { name: "CSS3", level: 88, icon: SiCss },
  { name: "WordPress", level: 80, icon: SiWordpress },
  { name: "WooCommerce", level: 80, icon: SiWoocommerce },
  { name: "Payment Gateways", level: 82, icon: TbCreditCard },
  { name: "Odoo / ERP", level: 70, icon: TbBuildingStore },
  { name: "PostgreSQL", level: 80, icon: SiPostgresql },
  { name: "Redis", level: 72, icon: SiRedis },
  { name: "Celery", level: 72, icon: SiCelery },
  { name: "OpenAI API", level: 75, icon: SiOpenai },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "React + TypeScript Developer",
    company: "Dream Square",
    period: "Jun 2025 — Present",
    points: [
      "Hands-on frontend development using React and TypeScript.",
      "Built dynamic, responsive UIs, integrated REST APIs, and implemented state management for smooth data flow.",
      "Focused on clean, maintainable code and user-centered web experiences optimized for speed and scalability.",
    ],
  },
  {
    role: "Django Backend Developer",
    company: "Dream Square",
    period: "Jan 2024 — Present",
    points: [
      "2 years building secure and scalable REST APIs using Django & Django REST Framework.",
      "Worked on eCommerce platforms, user authentication systems, and database management.",
      "Ensured optimized performance and smooth frontend integration with React.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dream Square",
    period: "Jan 2024 — Present",
    points: [
      "Strong frontend work with React, TypeScript, and modern UI libraries like Bootstrap and Tailwind CSS.",
      "Built responsive, user-friendly interfaces with clean code and seamless API integration.",
    ],
  },
  {
    role: "WordPress Developer",
    company: "Dream Square",
    period: "Jun 2024 — Present",
    points: [
      "Developed and customized WordPress websites — theme customization, plugin integration, and performance optimization.",
      "Built eCommerce sites with WooCommerce, improving design, functionality, and UX to meet client requirements.",
    ],
  },
];

export type Project = {
  title: string;
  category: string;
  period: string;
  description: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "DatrixWorld",
    category: "Enterprise Agency",
    period: "Apr 2026 — May 2026",
    description:
      "A high-performance corporate platform for a global technology agency. Built with Django using a modular architecture to showcase AI integration, cloud-native infrastructure, and full-stack engineering. Custom CMS workflow, SEO optimization, and complex lead-generation systems for B2B engagement.",
    tags: ["Django CMS", "Dynamic Content", "SEO", "Service Architecture", "Security"],
    link: "https://datrixworld.com",
  },
  {
    title: "Jobaro",
    category: "AI & Career SaaS",
    period: "Feb 2025 — Mar 2026",
    description:
      "An AI-powered career platform that streamlines the job application process. Features an ATS-friendly CV builder with PDF export, AI-driven resume optimization against job descriptions, and a Chrome extension for automated form-filling.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "OpenAI API"],
    link: "https://jobaro.io/",
  },
  {
    title: "FamilyCo",
    category: "Retail E-commerce",
    period: "Feb 2025 — Jul 2025",
    description:
      "A WordPress-based e-commerce storefront for a wide consumer base. Managed a diverse product inventory and optimized the site for the Pakistani digital market with local payment & logistics integration and a mobile-first design.",
    tags: ["WordPress", "WooCommerce", "Local SEO", "Mobile-First", "CRO"],
    link: "http://familyco.pk",
  },
  {
    title: "Zain Calligraphy",
    category: "Luxury E-commerce",
    period: "Jan 2024 — Nov 2024",
    description:
      "A premium online gallery for high-end, exclusive Islamic wall art. Handled high-value transactions with multi-currency support for a global clientele, with strong visual storytelling and brand identity.",
    tags: ["E-commerce", "Multi-Currency", "Brand Identity", "SEO", "UX/UI"],
    link: "http://zaincalligraphy.com",
  },
];

export type Education = {
  degree: string;
  field: string;
  institute: string;
  period: string;
  grade: string;
};

export const education: Education[] = [
  {
    degree: "BSIT",
    field: "Computer Science",
    institute: "Virtual University of Pakistan",
    period: "Feb 2023 — Present",
    grade: "CGPA 3.2",
  },
  {
    degree: "ICS",
    field: "Computer Science",
    institute: "Intermediate",
    period: "Jun 2021 — Jun 2023",
    grade: "Grade B",
  },
];
