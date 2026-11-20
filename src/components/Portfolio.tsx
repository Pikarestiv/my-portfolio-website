import { FC, useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  chevronDown,
  eyeOutline,
  closeOutline,
  globeOutline,
  openOutline,
  imagesOutline,
} from "ionicons/icons";

// Authentic Project images directly from the Dumostech portfolio and platform codebases
import dumosrx from "../images/projects/dumosrx.jpg";
import dumosrx2 from "../images/projects/dumosrx-2.jpg";
import dumosrx3 from "../images/projects/dumosrx-3.jpg";
import booksolterra from "../images/projects/booksolterra.jpg";
import booksolterra2 from "../images/projects/booksolterra-2.jpg";
import booksolterra3 from "../images/projects/booksolterra-3.jpg";
import anmhris from "../images/projects/anmhris.jpg";
import anmhris2 from "../images/projects/anmhris-2.jpg";
import gwam from "../images/projects/gwam.jpg";
import gwam2 from "../images/projects/gwam-2.jpg";
import cleanwaterndigbo from "../images/projects/cleanwaterndigbo.jpg";
import tublian from "../images/projects/tublian.jpg";
import wedeywatch from "../images/projects/wedeywatch.png";
import wedeywatchMap from "../images/projects/wedeywatch-map.jpg";
import wedeywatchReport from "../images/projects/wedeywatch-report.png";
import wedeywatchLogin from "../images/projects/wedeywatch-login.png";
import bumpit from "../images/projects/bumpit.png";
import unspokenn from "../images/projects/unspokenn.png";
import clayGlobal from "../images/projects/clay-global.png";
import dumofield from "../images/projects/dumofield.jpg";
import mwexl from "../images/projects/mwexl.png";
import krosa from "../images/projects/krosa.png";
import chikaOdumodu from "../images/projects/chikaodufound.png";
import excel2sql from "../images/projects/excel2sql-main.png";
import ikeduStores from "../images/projects/iked.png";
import ginie from "../images/projects/ginie-home.png";
import passportParliament from "../images/projects/passparl-home-med.png";

interface Project {
  id: string;
  title: string;
  categoryFilter: string;
  displayCategory: string;
  sector: string;
  image: string;
  gallery?: string[];
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  isFeatured?: boolean;
}

const projectsData: Project[] = [
  {
    id: "wedeywatch",
    title: "We Dey Watch — Civic Incident Reporting Platform",
    categoryFilter: "web apps mobile apps",
    displayCategory: "Web Apps, Mobile PWA, Civic Tech",
    sector: "Civic Tech & Election Integrity (Nigeria)",
    image: wedeywatch,
    gallery: [wedeywatch, wedeywatchMap, wedeywatchReport, wedeywatchLogin],
    isFeatured: true,
    description:
      "An offline-first progressive web application for ordinary citizens to report real-world incidents (electoral misconduct, security issues, infrastructure failures) and track verified occurrences on an interactive feed and map.",
    highlights: [
      "Zero app-store friction: installable PWA with offline queueing that silently sends reports when network returns.",
      "Privacy-first architecture: automatic EXIF metadata stripping, strict anonymity defaults, and one-tap emergency panic wipe.",
      "Interactive map grouping and heatmaps across all 36 Nigerian states and 774 LGAs with a multi-role moderation desk.",
      "Multi-step guided incident reporting: electoral offences, insecurity, protests, and public infrastructure tracking.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "PWA",
      "Service Workers",
      "Leaflet / OpenStreetMap",
      "Tailwind CSS",
      "NDPA Compliance",
    ],
    liveUrl: "https://dumostech.com/portfolio",
  },
  {
    id: "dumosrx",
    title: "DumosRx — Retail & Store Operating System",
    categoryFilter: "web apps enterprise & saas",
    displayCategory: "Web Apps, Enterprise, Offline-First",
    sector: "Commercial · Pharmacy & Retail Operations (Nigeria)",
    image: dumosrx,
    gallery: [dumosrx, dumosrx2, dumosrx3],
    isFeatured: true,
    description:
      "A commercial business management platform and Point of Sale (POS) system engineered specifically for Nigerian retail and pharmacy businesses to withstand frequent power outages and dropped network connections.",
    highlights: [
      "Engineered an offline-first architecture with local SQLite persistence and an automated conflict-resolving cloud synchronisation engine.",
      "Multi-tenant account structure with multi-branch reporting, sales analytics, product profitability, and stock-expiry alerting.",
      "Built with React/Next.js and Tauri for desktop and web deployments, with full POS register, receipt generation, and prescription audit trail.",
    ],
    techStack: [
      "React",
      "Next.js",
      "Tauri",
      "TypeScript",
      "SQLite",
      "Tailwind CSS",
      "Offline-First",
    ],
    liveUrl: "https://dumosrx.com",
  },
  {
    id: "bumpit",
    title: "BumpIt — Location-Based Social Platform",
    categoryFilter: "mobile apps ai & cloud",
    displayCategory: "Mobile Apps, AI, Full Platform",
    sector: "Consumer Social (United States)",
    image: bumpit,
    isFeatured: true,
    description:
      "A comprehensive consumer platform spanning a cross-platform mobile application, marketing web presence, and an administrative operations dashboard on a shared backend.",
    highlights: [
      "Built real-time WebSocket messaging, geolocation matching, profile management, and multi-device session management in React Native and TypeScript.",
      "Integrated third-party identity verification, queued push notifications, and AI matching and moderation algorithms.",
      "Built and deployed through automated CI/CD app-store pipelines and successfully handed over to the client's engineering team.",
    ],
    techStack: [
      "React Native",
      "TypeScript",
      "NativeWind",
      "NestJS",
      "WebSockets",
      "Redis",
      "AWS",
    ],
    liveUrl: "https://dumostech.com/portfolio",
  },
  {
    id: "booksolterra",
    title: "Booksolterra — Multi-Tenant Direct Booking Platform",
    categoryFilter: "web apps enterprise & saas",
    displayCategory: "Web Apps, Enterprise, CMS",
    sector: "Hospitality & Short-Term Rentals (International)",
    image: booksolterra,
    gallery: [booksolterra, booksolterra2, booksolterra3],
    isFeatured: true,
    description:
      "A direct-booking hospitality platform for luxury short-term rentals, enabling independent property owners to operate branded booking sites and retain commissions that would otherwise go to third-party travel platforms.",
    highlights: [
      "Centralized Property entity driving custom branding, CMS rules, and luminance-aware contrast theming with strict middleware tenant isolation.",
      "Two-way iCal calendar synchronisation with Airbnb and Vrbo, dynamic pricing sync from PriceLabs, and Stripe Identity verification.",
      "Two-tier admin portal separating super admin and property owners, templated transactional email editor, and cross-property analytics.",
    ],
    techStack: [
      "Laravel 10",
      "PHP 8.1",
      "MySQL",
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
    ],
    liveUrl: "https://booksolterra.com",
  },
  {
    id: "tublian",
    title: "Tublian — AI Platform for Software Creators",
    categoryFilter: "web apps ai & cloud",
    displayCategory: "Web Apps, Applied AI, DevOps",
    sector: "AI & Developer Tooling (Ohio, USA / Remote)",
    image: tublian,
    isFeatured: true,
    description:
      "Led frontend engineering as Tublian expanded from a few hundred users to 13,000+ developers, scaling the React/Next.js codebase to over 500 components.",
    highlights: [
      "Shipped user-facing experiences for 5 AI products: Tublian OS (autonomous repo PR agent), Jobs Copilot (ATS resume generator), Open Source, 8020, and Tublibot.",
      "Engineered real-time LLM model streaming, integrated microservices, and managed AWS DevOps pipelines.",
      "Contributed as Lead Frontend Engineer (2022–2024) and continued as Frontend Advisor & Consultant (2025).",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AI Agents",
      "AWS",
      "Microservices",
    ],
    liveUrl: "https://tublian.com",
  },
  {
    id: "anmhris",
    title: "ANMHRIS — Anambra Health Record Information System",
    categoryFilter: "web apps enterprise & saas",
    displayCategory: "Web Apps, Public Sector, Health Data",
    sector: "State Health Administration (Nigeria)",
    image: anmhris,
    gallery: [anmhris, anmhris2],
    isFeatured: true,
    description:
      "A medical record information system for Anambra State, designed to unify and safeguard patient record histories across multiple healthcare facilities within a single governed system.",
    highlights: [
      "Multi-facility patient records management with role-based access control and facility isolation.",
      "Immutable audit trails recording every encounter, view, and modification.",
      "Engineered for low-bandwidth environments and diverse staff technical backgrounds.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Relational Data",
      "RBAC",
      "Tailwind CSS",
    ],
    liveUrl: "https://dumostech.com/projects/anmhris",
  },
  {
    id: "unspokenn",
    title: "Unspokenn — Anonymous Abuse Reporting Platform",
    categoryFilter: "web apps enterprise & saas",
    displayCategory: "Web Apps, Social Impact, Security",
    sector: "Social Impact & Safeguarding (United States)",
    image: unspokenn,
    isFeatured: false,
    description:
      "A secure web platform enabling abuse survivors and witnesses across the United States to report incidents anonymously with cryptographic certainty that their identity cannot be traced.",
    highlights: [
      "Treated anonymity, minimal data collection, and end-to-end encryption as architectural constraints from day one.",
      "Accessible, responsive user interface with emergency quick-exit and WCAG conformance.",
      "Agile delivery in close collaboration with product designers and backend engineers.",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "E2E Encryption",
    ],
    liveUrl: "https://dumostech.com/projects/unspokenn",
  },
  {
    id: "gwam",
    title: "Gwa'm — Anonymous Messaging & AI Moderation",
    categoryFilter: "mobile apps web apps ai & cloud",
    displayCategory: "Mobile Apps, PWA, AI Moderation",
    sector: "Consumer & Social (Nigeria)",
    image: gwam,
    gallery: [gwam, gwam2],
    isFeatured: false,
    description:
      "A lightweight, installable progressive web application for anonymous communication, protected by an AI keyword filtering engine that intercepts abusive content before delivery.",
    highlights: [
      "AI-driven content safety filter and proactive abuse reporting.",
      "Offline-capable PWA with quick home-screen install and minimal data footprint.",
      "Themeable interface including high-contrast accessibility options.",
    ],
    techStack: ["React", "TypeScript", "PWA", "AI Moderation", "Tailwind CSS"],
    liveUrl: "https://dumostech.com/projects/gwam",
  },
  {
    id: "cleanwaterndigbo",
    title: "Clean Water Ndigbo — Water Access Platform",
    categoryFilter: "websites",
    displayCategory: "Websites, Social Impact",
    sector: "Non-Profit & Public Health (Nigeria)",
    image: cleanwaterndigbo,
    isFeatured: false,
    description:
      "A corporate and social impact web platform for Clean Water Ndigbo, driving community water access, borehole projects, and public health outreach across South-Eastern Nigeria.",
    highlights: [
      "Responsive public-interest portal presenting impact reports, ongoing initiatives, and donor transparency.",
      "Engineered for fast loading under low-bandwidth mobile connections.",
    ],
    techStack: ["Web Technologies", "Responsive Layout", "SEO", "Accessibility"],
    liveUrl: "https://dumostech.com/projects/cleanwaterndigbo",
  },
  {
    id: "excel2sql",
    title: "Excel2SQL — Spreadsheet Ingestion & Reporting Tool",
    categoryFilter: "web apps enterprise & saas",
    displayCategory: "Web Apps, Data Ingestion, Enterprise",
    sector: "Commercial (United Kingdom)",
    image: excel2sql,
    isFeatured: false,
    description:
      "A specialized application importing complex multi-sheet spreadsheet data into relational databases for querying, transformation, and automated reporting.",
    highlights: [
      "Validated ingestion pipeline converting unstructured spreadsheets into clean, structured SQL schemas.",
      "Streamlined data analysis and eliminated manual data entry errors.",
    ],
    techStack: ["React", "TypeScript", "Node.js", "MySQL", "Spreadsheet Parsing"],
    liveUrl: "https://dumostech.com/projects/excel2sql",
  },
  {
    id: "ginie",
    title: "GINIE — Grants & Educational Resources Portal",
    categoryFilter: "web apps",
    displayCategory: "Web Apps, Public Information",
    sector: "Public Interest & Education (United Kingdom)",
    image: ginie,
    isFeatured: false,
    description:
      "A United Kingdom public portal helping students and organizations navigate grant opportunities, access curated resources, and track applications.",
    highlights: [
      "Reverse-engineered and rebuilt legacy components for enhanced performance.",
      "Maintained and optimized PostgreSQL database queries for data integrity and speed.",
    ],
    techStack: ["React", "TypeScript", "PostgreSQL", "Full-Stack API"],
    liveUrl: "https://dumostech.com/projects/ginie",
  },
  {
    id: "dumofield",
    title: "Dumofield Farms — Inventory Management System",
    categoryFilter: "web apps enterprise & saas",
    displayCategory: "Web Apps, Enterprise, Agriculture",
    sector: "Agriculture & Enterprise (Nigeria)",
    image: dumofield,
    isFeatured: false,
    description:
      "An end-to-end stock inventory management application engineered for Dumofield Egg Farm to streamline real-time stock monitoring, accuracy, and operational tracking across the farm.",
    highlights: [
      "Engineered an inventory tracking engine transitioning from Access POC to a resilient MVC architecture.",
      "Delivered LAN-based multi-user synchronization ensuring zero disruption during rural connectivity drops.",
      "Hands-on requirement gathering and staff training on the farm floor to ensure adoption.",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "JavaScript", "LAN Network Design"],
    liveUrl: "https://dumostech.com/projects/dumofield",
  },
  {
    id: "clayGlobal",
    title: "Clay Global Services — Corporate Platform",
    categoryFilter: "websites",
    displayCategory: "Websites, Corporate",
    sector: "Corporate Services (Canada / Nigeria)",
    image: clayGlobal,
    isFeatured: false,
    description:
      "Corporate web presence designed and deployed with a focus on cross-browser compliance, modern responsive layouts, and local SEO tracking.",
    highlights: [
      "Mobile-first responsive architecture and local search optimization.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsive Design"],
    liveUrl: "https://dumostech.com/projects/clay-global",
  },
  {
    id: "ikeduStores",
    title: "Ikedu Stores — Fashion E-commerce Storefront",
    categoryFilter: "websites web apps",
    displayCategory: "Websites, E-commerce",
    sector: "Retail & E-commerce (Nigeria)",
    image: ikeduStores,
    isFeatured: false,
    description:
      "Responsive fashion e-commerce storefront featuring product catalog filters, secure payments, and inventory synchronization.",
    highlights: [
      "Custom WooCommerce storefront optimized for mobile shopping experiences.",
    ],
    techStack: ["WooCommerce", "WordPress", "PHP", "Responsive Design"],
    liveUrl: "https://dumostech.com/projects/ikedu-stores",
  },
  {
    id: "krosa",
    title: "Krosa Model Schools Results Portal",
    categoryFilter: "web apps enterprise & saas",
    displayCategory: "Web Apps, EdTech, Enterprise",
    sector: "Education (Nigeria)",
    image: krosa,
    isFeatured: false,
    description:
      "Custom student results portal with subject-wise grading, PIN-protected access, and an administrative dashboard for records and score computation.",
    highlights: [
      "Automated academic grading engine aligned with institutional policies.",
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "Role-Based Security"],
    liveUrl: "https://dumostech.com/projects/krosa",
  },
  {
    id: "passportParliament",
    title: "Passport Parliament — Visa & Travel Services",
    categoryFilter: "websites",
    displayCategory: "Websites, Corporate",
    sector: "Travel & Immigration (Nigeria)",
    image: passportParliament,
    isFeatured: false,
    description:
      "Corporate travel website featuring interactive visa consultation tools, service directories, and customer intake forms.",
    highlights: [
      "Designed intuitive customer inquiry flows with measurable conversion improvements.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "SEO Optimization"],
    liveUrl: "https://dumostech.com/projects/passport-parliament",
  },
  {
    id: "chikaOdumodu",
    title: "Chika Odumodu Foundation",
    categoryFilter: "websites",
    displayCategory: "Websites, Social Impact",
    sector: "Non-Profit & Philanthropy (Nigeria)",
    image: chikaOdumodu,
    isFeatured: false,
    description:
      "Official portal for a charitable organization supporting underprivileged communities, featuring impact stories and donation integration.",
    highlights: [
      "Dynamic project presentation and community outreach management.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Donation Integration"],
    liveUrl: "https://dumostech.com/projects/chika-odumodu-foundation",
  },
  {
    id: "mwexl",
    title: "Mathematics World of Excellence",
    categoryFilter: "websites web apps",
    displayCategory: "Websites, Education",
    sector: "Education & STEM (Nigeria)",
    image: mwexl,
    isFeatured: false,
    description:
      "Educational web platform for sharing mathematics curriculum resources and academic achievement updates.",
    highlights: [
      "Accessible academic resource sharing and responsive learning views.",
    ],
    techStack: ["Web Technologies", "Responsive Layout"],
    liveUrl: "https://dumostech.com/projects/mwexl",
  },
];

const filterCategories = [
  { id: "all", label: "All" },
  { id: "enterprise & saas", label: "Enterprise & SaaS" },
  { id: "web apps", label: "Web Apps" },
  { id: "mobile apps", label: "Mobile Apps" },
  { id: "ai & cloud", label: "AI & Cloud" },
  { id: "websites", label: "Websites" },
];

const Portfolio: FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSelectActive, setIsSelectActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>("");

  // Handle filter button click
  const handleFilterClick = (filterId: string) => {
    setActiveCategory(filterId);
    setIsSelectActive(false);
  };

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setActiveModalImage(project.image);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setActiveModalImage("");
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "all") return true;
    return project.categoryFilter.includes(activeCategory);
  });

  return (
    <article className="portfolio active">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <div>
          <h2 className="h2 article-title !mb-1">Portfolio</h2>
          <p className="text-xs text-gray-400">
            Selected platforms across SaaS, AI, offline-first systems, and mobile applications
          </p>
        </div>
        <div className="text-right">
          <a
            href="https://dumostech.com/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium bg-amber-400/10 px-3 py-1.5 rounded-lg border border-amber-400/20 transition-colors"
          >
            <span>View Full Dumostech Portfolio</span>
            <IonIcon icon={openOutline} />
          </a>
        </div>
      </header>

      <section className="projects">
        {/* Desktop Filter Bar */}
        <ul className="filter-list">
          {filterCategories.map((cat) => (
            <li key={cat.id} className="filter-item">
              <button
                className={activeCategory === cat.id ? "active" : ""}
                data-filter-btn
                onClick={() => handleFilterClick(cat.id)}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Dropdown Filter */}
        <div className={`filter-select-box ${isSelectActive ? "active" : ""}`}>
          <button
            className="filter-select"
            data-select
            onClick={() => setIsSelectActive(!isSelectActive)}
          >
            <div className="select-value" data-selecct-value>
              {filterCategories.find((c) => c.id === activeCategory)?.label ||
                "All"}
            </div>
            <div className="select-icon">
              <IonIcon icon={chevronDown} />
            </div>
          </button>

          <ul className="select-list">
            {filterCategories.map((cat) => (
              <li key={cat.id} className="select-item">
                <button
                  data-select-item
                  onClick={() => handleFilterClick(cat.id)}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Cards Grid */}
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="project-item active cursor-pointer group"
              data-filter-item
              data-category={project.categoryFilter}
              onClick={() => openProjectModal(project)}
            >
              <div>
                <figure className="project-img relative overflow-hidden rounded-xl border border-gray-800 group-hover:border-amber-400/40 transition-all bg-[#161a22]">
                  <div className="project-item-icon-box">
                    <IonIcon icon={eyeOutline} />
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {project.isFeatured && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      Featured
                    </span>
                  )}

                  {project.gallery && project.gallery.length > 1 && (
                    <span className="absolute bottom-3 right-3 bg-black/75 text-gray-200 text-[10px] font-semibold flex items-center gap-1 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                      <IonIcon icon={imagesOutline} />
                      <span>{project.gallery.length} screens</span>
                    </span>
                  )}
                </figure>

                <div className="mt-3">
                  <h3 className="project-title group-hover:text-amber-400 transition-colors line-clamp-1 font-semibold text-base text-gray-100">
                    {project.title}
                  </h3>

                  <p className="project-category text-xs text-amber-400/90 font-medium">
                    {project.displayCategory}
                  </p>

                  <p className="text-xs text-gray-400 line-clamp-2 mt-1">
                    {project.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Project Details Modal */}
      <div
        className={`modal-container ${selectedProject ? "active" : ""}`}
        data-modal-container
        style={{ display: selectedProject ? "flex" : "none" }}
      >
        <div className="overlay active" onClick={closeProjectModal}></div>

        {selectedProject && (
          <div className="relative bg-[#1e232d] text-gray-200 border border-gray-700/80 rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto z-30 shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors border border-gray-700 z-10"
              aria-label="Close modal"
            >
              <IonIcon icon={closeOutline} className="text-xl" />
            </button>

            {/* Header */}
            <div className="pr-10 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-400/15 text-amber-300 border border-amber-400/30">
                {selectedProject.displayCategory}
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                {selectedProject.sector}
              </p>
            </div>

            {/* Main Preview Image */}
            <div className="rounded-xl overflow-hidden border border-gray-700/60 mb-3 bg-black/40">
              <img
                src={activeModalImage || selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-80 object-contain mx-auto"
              />
            </div>

            {/* Gallery Thumbnails (if multiple screens available) */}
            {selectedProject.gallery && selectedProject.gallery.length > 1 && (
              <div className="mb-5">
                <p className="text-[11px] font-medium text-gray-400 mb-2 flex items-center gap-1.5">
                  <IonIcon icon={imagesOutline} />
                  <span>Screenshots ({selectedProject.gallery.length}):</span>
                </p>
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {selectedProject.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImage(img)}
                      className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border transition-all ${
                        (activeModalImage || selectedProject.image) === img
                          ? "border-amber-400 ring-2 ring-amber-400/30 scale-105"
                          : "border-gray-700 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Screen ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Overview */}
            <div className="mb-4">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wide mb-1">
                Overview
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Architectural Highlights */}
            {selectedProject.highlights.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wide mb-2">
                  Key Engineering Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                Technologies &amp; Architecture
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#141820] text-gray-200 border border-gray-700/60 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-700/60">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs tracking-wide bg-amber-400 text-gray-900 hover:bg-amber-300 transition-colors shadow-md"
                >
                  <IonIcon icon={globeOutline} className="text-base" />
                  <span>Visit Platform / Learn More</span>
                </a>
              )}

              <button
                onClick={closeProjectModal}
                className="px-4 py-2 rounded-lg text-xs font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default Portfolio;