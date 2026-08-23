import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChartSpline,
  Cpu,
  DatabaseZap,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  LineChart,
  Link2,
  MessageSquareText,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Truck,
  Users
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export const stats = [
  { value: "40%", label: "Less manual routing and follow-up" },
  { value: "24/7", label: "Always-on digital operations" },
  { value: "3x", label: "Faster team handoffs" },
  { value: "100%", label: "Built around your stack" }
];

export const services = [
  { title: "AI Operators", icon: Bot, description: "Task-focused assistants that triage requests, update systems, and keep work moving without constant supervision." },
  { title: "Workflow Orchestration", icon: Network, description: "Connect approvals, documents, notifications, and handoffs across the tools your teams already use." },
  { title: "Predictive Intelligence", icon: BrainCircuit, description: "Turn operational data into forecasts, recommendations, alerts, and decision signals." },
  { title: "Conversational Interfaces", icon: MessageSquareText, description: "Create chat experiences for support, recruiting, sales, onboarding, and internal knowledge access." },
  { title: "Custom Platforms", icon: Cpu, description: "Build secure dashboards, portals, and internal tools shaped around real operating rules." },
  { title: "AI Readiness Planning", icon: BriefcaseBusiness, description: "Map high-value use cases, data requirements, risks, and a practical implementation path." }
];

export const processSteps = ["Discover", "Strategize", "Design", "Build", "Launch", "Improve"].map((title, index) => ({
  title,
  description: [
    "We map the people, systems, data, and delays behind the workflow.",
    "We choose the automation layer, AI model, integrations, and rollout path.",
    "We shape the screens, system logic, access rules, and handoff experience.",
    "We build the product, connect the stack, and test real user scenarios.",
    "We launch with documentation, adoption support, and operational checks.",
    "We review performance signals and refine the system as the work changes."
  ][index]
}));

export const advantages = [
  "Connected to Your Tools",
  "Clear for Daily Users",
  "Security-Conscious Delivery",
  "Measured After Launch"
];

export const industries = [
  { title: "Finance", icon: Landmark, text: "Automated review queues, risk summaries, client reporting, and approval trails." },
  { title: "Healthcare", icon: HeartPulse, text: "Operational intake, patient messaging support, scheduling flow, and analytics." },
  { title: "Education", icon: GraduationCap, text: "Student support workflows, admin routing, content tools, and progress insights." },
  { title: "Logistics", icon: Truck, text: "Dispatch visibility, status automation, route exceptions, and planning signals." },
  { title: "Retail", icon: ShoppingBag, text: "Inventory alerts, customer support automation, demand insights, and sales workflows." },
  { title: "Manufacturing", icon: Factory, text: "Production dashboards, quality checks, maintenance alerts, and shift handoffs." },
  { title: "Agriculture", icon: Sprout, text: "Field reporting, planning tools, sensor data workflows, and predictive signals." },
  { title: "Professional Services", icon: Users, text: "Client intake, approvals, reporting, document workflows, and knowledge access." }
];

export const projects = [
  {
    title: "Customer Response Command Center",
    category: "AI Operators",
    industry: "E-commerce",
    description: "A support workspace that answers routine questions, retrieves order context, and routes complex issues to the right person.",
    problem: "Teams were losing time moving between inboxes, order tools, and policy documents.",
    solution: "A retrieval-backed AI operator connected to customer records, policies, and ticket queues.",
    technologies: ["LLM operator", "Knowledge retrieval", "API connectors"],
    results: "58% fewer routine escalations",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Operations Flow Console",
    category: "Orchestration",
    industry: "Professional Services",
    description: "A control surface for approvals, assignments, status updates, and reporting across daily operations.",
    problem: "Work stalled because ownership and next steps were scattered across messages and spreadsheets.",
    solution: "A role-aware workflow console with automated prompts, dashboards, and audit history.",
    technologies: ["Next.js", "Workflow rules", "Operational analytics"],
    results: "3x faster handoffs",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Revenue Signal Engine",
    category: "Machine Learning",
    industry: "Retail",
    description: "A scoring system that reads account activity and highlights the opportunities most likely to convert.",
    problem: "Sales teams were guessing which accounts deserved immediate attention.",
    solution: "A signal model and pipeline that ranked activity, fit, timing, and engagement.",
    technologies: ["Scoring model", "Data pipelines", "Team dashboards"],
    results: "22% lift in qualified pipeline",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Live Reporting Mesh",
    category: "Data Systems",
    industry: "Manufacturing",
    description: "A reporting layer that brings production, quality, and maintenance data into one live view.",
    problem: "Leaders waited days for reports and still lacked a shared source of truth.",
    solution: "Automated data pipelines, role-based dashboards, and exception alerts.",
    technologies: ["Data pipelines", "BI", "Alerting"],
    results: "Same-day visibility across teams",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
  }
];

export const detailedServices = [
  "AI Agent Development",
  "Business Process Automation",
  "Machine Learning Solutions",
  "Intelligent Chatbots",
  "Custom Software Development",
  "API and System Integration",
  "Data Analytics",
  "AI Strategy and Consulting",
  "Maintenance and Technical Support"
].map((title) => ({
  title,
  description: `avorynai delivers ${title.toLowerCase()} as practical systems with clear ownership, secure integrations, and measurable operational outcomes.`,
  benefits: ["Fewer manual steps", "Better handoffs", "Cleaner data flow", "Measurable outcomes"],
  useCases: ["Operations teams", "Customer workflows", "Executive reporting", "Internal productivity"],
  process: ["Map", "Prototype", "Integrate", "Validate", "Optimize"]
}));

export const solutions = [
  { title: "Run Cleaner Operations", icon: Layers3, text: "Coordinate approvals, onboarding, documents, assignments, and recurring work from one connected flow." },
  { title: "Support Customers Faster", icon: MessageSquareText, text: "Give teams an AI-assisted response layer that finds answers, checks context, and routes edge cases." },
  { title: "Prioritize Revenue Work", icon: ChartSpline, text: "Use account signals, lead scoring, and personalized prompts to focus sales energy where it matters." },
  { title: "See the Business Clearly", icon: DatabaseZap, text: "Turn disconnected data into live reports, forecasts, exception alerts, and decision-ready views." },
  { title: "Launch Smarter Products", icon: Rocket, text: "Add intelligent features to portals, apps, dashboards, and internal platforms without losing control." }
];

export const roles = [
  "Customer Care Representative",
  "Data Entry Clerk",
  "Administrative Assistant",
  "Virtual Assistant",
  "Sales Support Associate",
  "Office Support Coordinator"
].map((title, index) => ({
  title,
  department: ["Customer Support", "Operations", "Administration", "Operations", "Sales", "Administration"][index],
  location: "Remote / Hybrid",
  type: "Full-time",
  level: ["Entry-Mid", "Entry", "Entry-Mid", "Entry-Mid", "Entry-Mid", "Entry"][index],
  description: "Support client and internal operations with organized communication, clean records, and dependable follow-through."
}));

export const team = [
  { name: "Nadia Ellis", role: "AI Solutions Lead", bio: "Turns complex workflow problems into focused AI roadmaps and delivery plans.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&crop=faces&w=900&q=85" },
  { name: "Marcus Vale", role: "Engineering Director", bio: "Oversees platform architecture, system integrations, reliability, and technical delivery.", image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?auto=format&fit=crop&crop=faces&w=900&q=85" },
  { name: "Priya Bennett", role: "Product Designer", bio: "Designs calm, usable interfaces for teams working inside complex business processes.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&crop=faces&w=900&q=85" },
  { name: "Rick llanos", role: "HR", bio: "Leads recruiting coordination, team support, and employee operations across avorynai.", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&crop=faces&w=900&q=85" }
];

export const contactDetails = {
  email: "info@avorynai.com",
  phone: "+1 (813) 377-6328",
  address: "1103 Stewart Ave Garden City, NY, 11530, USA",
  hours: "Monday to Friday, 9:00 AM - 5:00 PM",
  socials: ["LinkedIn", "X", "GitHub"]
};

export const faq = [
  "What types of businesses does avorynai work with?",
  "Can avorynai build a custom AI agent?",
  "How long does a project take?",
  "Does avorynai provide ongoing support?",
  "Can avorynai integrate with existing software?",
  "Does avorynai work with international clients?",
  "How is project pricing determined?",
  "How does avorynai protect business data?"
];

export const serviceIcons = { shield: ShieldCheck, link: Link2, chart: LineChart };
