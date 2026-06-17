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
  nameDisplay: "HaroonAli",
  role: "Full Stack Developer",
  company: "Dream Square",
  tagline:
    "Full Stack Developer at Dream Square, building robust React frontends and scalable Django backends from Pakistan. This is the whole story — scroll and watch it unfold.",
  about:
    "Result-oriented Full Stack Developer specializing in building robust, secure, and user-focused web applications. Expert in modern frameworks like React, Django, and REST APIs, with a strong focus on seamless frontend-backend integration and scalable database management.",
  email: "malikharoonu68@gmail.com",
  phone: "03274414649",
  location: "Pakistan",
  locationTag: "Pakistan · est. one curious builder",
  linkedin: "https://www.linkedin.com/in/haroon-ali-1a06a329b/",
  github: "https://github.com/Harry-lab-bit",
  calendlyUrl: "https://calendly.com/malikharoonu68/30min",
};

export const credentials = [
  "Full Stack Developer",
  "2+ Years Experience",
  "React & Django Expert",
  "5+ Projects Shipped",
  "15+ Technologies",
  "Client-Focused",
];

export const metrics = [
  { value: 2, suffix: "+", label: "Years building production apps" },
  { value: 5, suffix: "+", label: "Products & projects shipped" },
  { value: 15, suffix: "+", label: "Technologies mastered" },
  { value: 4, suffix: "", label: "Live client platforms" },
];

export const marqueeSkills = [
  "REACT",
  "TYPESCRIPT",
  "DJANGO",
  "PYTHON",
  "REST APIs",
  "WORDPRESS",
  "WOOCOMMERCE",
  "TAILWIND",
  "POSTGRESQL",
  "REDIS",
  "CELERY",
  "OPENAI API",
  "E-COMMERCE",
  "FULL STACK",
];

export type JourneyEntry = {
  year: number;
  category: string;
  title: string;
  summary: string;
  bullets: string[];
};

export const journey: JourneyEntry[] = [
  {
    year: 2021,
    category: "Education",
    title: "First steps into code.",
    summary:
      "Started ICS in Computer Science and discovered a passion for building on the web.",
    bullets: [
      "Enrolled in ICS Computer Science program",
      "Learned HTML, CSS, and programming fundamentals",
      "Built first small web projects",
      "Decided to pursue software development seriously",
    ],
  },
  {
    year: 2022,
    category: "Foundations",
    title: "Web fundamentals.",
    summary:
      "Deepened core web skills and started exploring backend development with Python.",
    bullets: [
      "Mastered HTML, CSS, and responsive design",
      "Started learning Python programming",
      "Built personal projects to practice daily",
      "Developed problem-solving discipline",
    ],
  },
  {
    year: 2023,
    category: "University",
    title: "BSIT & professional growth.",
    summary:
      "Started BSIT at Virtual University while sharpening development skills for real-world work.",
    bullets: [
      "Enrolled in BSIT Computer Science (CGPA 3.2)",
      "Learned Django and REST API development",
      "Started professional work at Dream Square",
      "Combined academics with hands-on industry experience",
    ],
  },
  {
    year: 2024,
    category: "Backend",
    title: "Django & WordPress mastery.",
    summary:
      "Built secure REST APIs with Django and delivered WordPress e-commerce solutions for clients.",
    bullets: [
      "2 years building Django & DRF REST APIs",
      "Developed Zain Calligraphy luxury e-commerce platform",
      "WordPress theme customization and WooCommerce stores",
      "Payment gateway and multi-currency integration",
    ],
  },
  {
    year: 2025,
    category: "Full Stack",
    title: "React meets Django.",
    summary:
      "Expanded into React + TypeScript frontends and shipped AI-powered and e-commerce platforms.",
    bullets: [
      "React + TypeScript frontend development at Dream Square",
      "Built Jobaro — AI-powered career platform with OpenAI API",
      "Delivered FamilyCo retail e-commerce for Pakistani market",
      "Celery, Redis, and async task processing at scale",
    ],
  },
  {
    year: 2026,
    category: "Enterprise",
    title: "Scaling up.",
    summary:
      "Delivering enterprise-grade platforms with modular architecture and production-grade quality.",
    bullets: [
      "Built DatrixWorld corporate platform with Django CMS",
      "Modular architecture for AI and cloud-native showcases",
      "SEO optimization and B2B lead-generation systems",
      "End-to-end full stack delivery across multiple domains",
    ],
  },
];

export type Strength = {
  id: number;
  title: string;
  items: { heading: string; body: string }[];
};

export const strengths: Strength[] = [
  {
    id: 1,
    title: "Frontend Engineering",
    items: [
      {
        heading: "React + TypeScript Developer",
        body: "Hands-on frontend development using React and TypeScript with dynamic, responsive UIs and clean state management.",
      },
      {
        heading: "Modern UI Libraries",
        body: "Expert in Tailwind CSS and Bootstrap for building pixel-perfect, mobile-first interfaces optimized for speed.",
      },
      {
        heading: "API Integration",
        body: "Seamless REST API integration with smooth data flow and user-centered web experiences.",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Architecture",
    items: [
      {
        heading: "Django Backend Developer",
        body: "2+ years building secure and scalable REST APIs using Django and Django REST Framework.",
      },
      {
        heading: "Authentication & Security",
        body: "Implemented user authentication systems, role-based access, and secure data handling across platforms.",
      },
      {
        heading: "Performance Optimization",
        body: "Database query optimization, caching strategies, and async processing for high-traffic applications.",
      },
    ],
  },
  {
    id: 3,
    title: "REST API Design",
    items: [
      {
        heading: "API-First Development",
        body: "Designed and documented RESTful APIs with clear contracts for frontend and third-party integration.",
      },
      {
        heading: "Django REST Framework",
        body: "Serializers, viewsets, permissions, and filtering for robust API layers.",
      },
      {
        heading: "Frontend Integration",
        body: "Ensured smooth React-to-Django communication with optimized payload sizes and error handling.",
      },
    ],
  },
  {
    id: 4,
    title: "WordPress & WooCommerce",
    items: [
      {
        heading: "WordPress Developer",
        body: "Developed and customized WordPress websites with theme customization and plugin integration.",
      },
      {
        heading: "WooCommerce Expert",
        body: "Built e-commerce sites with WooCommerce — product catalogs, checkout flows, and payment integration.",
      },
      {
        heading: "Performance Tuning",
        body: "Optimized WordPress sites for speed, SEO, and conversion rate optimization.",
      },
    ],
  },
  {
    id: 5,
    title: "E-commerce Solutions",
    items: [
      {
        heading: "FamilyCo Retail Platform",
        body: "WordPress e-commerce storefront optimized for the Pakistani digital market with local payments.",
      },
      {
        heading: "Zain Calligraphy",
        body: "Premium luxury e-commerce with multi-currency support and high-value transaction handling.",
      },
      {
        heading: "Payment Gateways",
        body: "Integrated local and international payment gateways for seamless checkout experiences.",
      },
    ],
  },
  {
    id: 6,
    title: "AI Integration",
    items: [
      {
        heading: "Jobaro AI Platform",
        body: "Built AI-powered career platform with resume optimization against job descriptions using OpenAI API.",
      },
      {
        heading: "ATS-Friendly CV Builder",
        body: "CV builder with PDF export and AI-driven content suggestions for job seekers.",
      },
      {
        heading: "Chrome Extension",
        body: "Automated form-filling extension for streamlined job application workflows.",
      },
    ],
  },
  {
    id: 7,
    title: "Database & Performance",
    items: [
      {
        heading: "PostgreSQL",
        body: "Schema design, indexing, and query optimization for relational data at scale.",
      },
      {
        heading: "Redis & Celery",
        body: "Background task processing, caching layers, and async job queues for responsive apps.",
      },
      {
        heading: "Odoo / ERP",
        body: "Experience with ERP systems and business process automation integrations.",
      },
    ],
  },
  {
    id: 8,
    title: "Enterprise Delivery",
    items: [
      {
        heading: "DatrixWorld Platform",
        body: "High-performance corporate platform with modular Django architecture and custom CMS workflow.",
      },
      {
        heading: "SEO & Lead Generation",
        body: "SEO optimization and complex lead-generation systems for B2B engagement.",
      },
      {
        heading: "Service Architecture",
        body: "Cloud-native infrastructure showcases with security-first design patterns.",
      },
    ],
  },
  {
    id: 9,
    title: "Client-Focused Development",
    items: [
      {
        heading: "Dream Square Team",
        body: "Multi-role developer delivering end-to-end solutions across web, e-commerce, and AI domains.",
      },
      {
        heading: "100% Client Focus",
        body: "Dedicated to efficient solutions that align with business goals and user needs.",
      },
      {
        heading: "Full Ownership",
        body: "From requirements to deployment — taking full responsibility for project success.",
      },
    ],
  },
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
      "A high-performance corporate platform for a global technology agency. Built with Django using a modular architecture to showcase AI integration, cloud-native infrastructure, and full-stack engineering.",
    tags: ["Django CMS", "Dynamic Content", "SEO", "Service Architecture", "Security"],
    link: "https://datrixworld.com",
  },
  {
    title: "Jobaro",
    category: "AI & Career SaaS",
    period: "Feb 2025 — Mar 2026",
    description:
      "An AI-powered career platform that streamlines the job application process. Features an ATS-friendly CV builder with PDF export, AI-driven resume optimization, and a Chrome extension.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "Celery", "Redis", "OpenAI API"],
    link: "https://jobaro.io/",
  },
  {
    title: "FamilyCo",
    category: "Retail E-commerce",
    period: "Feb 2025 — Jul 2025",
    description:
      "A WordPress-based e-commerce storefront optimized for the Pakistani digital market with local payment & logistics integration and a mobile-first design.",
    tags: ["WordPress", "WooCommerce", "Local SEO", "Mobile-First", "CRO"],
    link: "http://familyco.pk",
  },
  {
    title: "Zain Calligraphy",
    category: "Luxury E-commerce",
    period: "Jan 2024 — Nov 2024",
    description:
      "A premium online gallery for high-end Islamic wall art with multi-currency support for a global clientele and strong visual storytelling.",
    tags: ["E-commerce", "Multi-Currency", "Brand Identity", "SEO", "UX/UI"],
    link: "http://zaincalligraphy.com",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Strengths", href: "#strengths" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  "Full Stack Web Apps",
  "React Frontends",
  "Django Backends",
  "WordPress & E-commerce",
  "AI Integration",
  "API Development",
];
