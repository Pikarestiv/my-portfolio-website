import { FC } from "react";
import { IonIcon } from "@ionic/react";
import { bookOutline, downloadOutline, briefcaseOutline } from "ionicons/icons";

const TimelineSection: FC<{
  title: string;
  icon: string;
  items: Array<{
    title: string;
    company?: string;
    location?: string;
    date: string;
    description: string;
    highlights?: string[];
  }>;
}> = ({ title, icon, items }) => (
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <IonIcon icon={icon} />
      </div>
      <h3 className="h3">{title}</h3>
    </div>
    <ol className="timeline-list">
      {items.map((item, index) => (
        <li key={index} className="timeline-item">
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          {item.company && (
            <p className="text-xs text-amber-400 font-medium mb-1">
              {item.company} {item.location ? `· ${item.location}` : ""}
            </p>
          )}
          <span>{item.date}</span>
          <p className="timeline-text">{item.description}</p>
          {item.highlights && item.highlights.length > 0 && (
            <ul className="mt-2 space-y-1 list-disc list-inside text-xs text-gray-300">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  </section>
);

const SkillCategory: FC<{ title: string; skills: string[] }> = ({
  title,
  skills,
}) => (
  <div className="bg-[#1e232d] p-4 rounded-xl border border-gray-800/60 shadow-sm">
    <h4
      className="text-base font-semibold mb-3 flex items-center gap-2"
      style={{ color: "hsl(45, 100%, 72%)" }}
    >
      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
      {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={`${title}-${index}`}
          className="text-xs px-2.5 py-1 rounded-md bg-[#161a22] text-gray-200 border border-gray-700/50 hover:border-amber-400/50 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const SkillsSection: FC = () => {
  const skillCategories = [
    {
      title: "Frontend & Web Architecture",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Material UI",
        "Radix UI",
        "Vite",
        "TanStack Query",
        "Zustand",
        "Responsive & a11y Architecture",
      ],
    },
    {
      title: "Backend & Microservices",
      skills: [
        "Node.js",
        "NestJS",
        "Express.js",
        "Koa",
        "Laravel / PHP",
        "RESTful APIs",
        "WebSockets",
        "Microservices Architecture",
        "Role-Based Access Control (RBAC)",
      ],
    },
    {
      title: "Databases & Offline Storage",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "SQLite",
        "Redis Caching",
        "Offline-First Synchronisation",
        "Conflict Resolution Engines",
      ],
    },
    {
      title: "Mobile & Cross-Platform",
      skills: [
        "React Native",
        "Expo",
        "Tauri Desktop Apps",
        "NativeWind",
        "Progressive Web Apps (PWA)",
        "Push Notifications & Geolocation",
      ],
    },
    {
      title: "DevOps & Cloud Infrastructure",
      skills: [
        "AWS (ECS, S3, CloudFront)",
        "Docker & Docker Compose",
        "GitHub Actions CI/CD",
        "Nginx & PM2",
        "Vercel",
        "Sentry Error Monitoring",
      ],
    },
    {
      title: "Applied AI & Developer Workflows",
      skills: [
        "OpenAI API & Anthropic Claude",
        "Autonomous Agent Workflows",
        "LLM Model Evaluation & Rubrics",
        "RAG Document Ingestion",
        "Prompt Engineering",
        "Cursor & Modern AI Tooling",
      ],
    },
  ];

  return (
    <section className="skill">
      <h3 className="h3 skills-title" style={{ color: "hsl(45, 54%, 58%)" }}>
        Technical Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {skillCategories.map((cat, idx) => (
          <SkillCategory key={idx} title={cat.title} skills={cat.skills} />
        ))}
      </div>
    </section>
  );
};

const Resume: FC = () => {
  const educationItems = [
    {
      title: "Nnamdi Azikiwe University, Awka",
      date: "2008 — 2013",
      description: "B. Eng., Chemical Engineering · Spatial thinking, systems analysis, and mathematical modeling.",
    },
  ];

  const experienceItems = [
    {
      title: "AI Training Specialist / Model Evaluator",
      company: "Handshake AI Fellowship",
      location: "Remote (Contract)",
      date: "Jan 2026 — Present",
      description:
        "Contract AI trainer and evaluator across Outlier, Handshake AI, and Mercor, working on frontier LLM evaluation and reinforcement training data.",
      highlights: [
        "Evaluate LLM training data and multi-turn conversations against structured rubrics for reasoning depth, coding accuracy, and instruction-following quality.",
        "Produce and review voice and multimodal tasks to improve speech and conversational model performance.",
        "Record and narrate complex computer workflows used to train computer-use autonomous agents.",
      ],
    },
    {
      title: "Co-Founder & Frontend Lead",
      company: "Dumostech",
      location: "Nigeria (Remote-First)",
      date: "Mar 2018 — Present",
      description:
        "Co-founded a distributed software consultancy, directing frontend and mobile engineering across 20+ commercial and public-interest platforms for clients in Nigeria, the US, UK, Canada, and Estonia.",
      highlights: [
        "Architect frontend systems and design patterns in React, Next.js, and TypeScript, delivering robust platforms including DumosRx, Booksolterra, ANMHRIS, Bumpit, and We Dey Watch.",
        "Architect full-stack features alongside Node.js, NestJS, and Laravel backends, integrating REST APIs, WebSockets, and database persistence.",
        "Lead engineering reviews, establish coding standards, and mentor 8+ developers; generated high repeat client engagements across international markets.",
      ],
    },
    {
      title: "Frontend Consultant (Part-time)",
      company: "Tublian",
      location: "Remote",
      date: "Jan 2025 — Nov 2025",
      description:
        "Served as technical frontend advisor after transitioning part-time, mentoring engineers on React, TypeScript, and modern state architecture.",
      highlights: [
        "Advised on frontend architecture, state management, and real-time streaming optimizations for AI features.",
        "Assisted with technical decisions, debugging, and code reviews across distributed teams.",
      ],
    },
    {
      title: "Lead Frontend Engineer",
      company: "Tublian",
      location: "Ohio, USA (Remote)",
      date: "Nov 2022 — Dec 2024",
      description:
        "Led frontend engineering as the AI software creation platform scaled from a few hundred users to 13,000+, growing the React/Next.js codebase to over 500 components.",
      highlights: [
        "Shipped user-facing experiences for 5 AI products: Tublian OS (autonomous repo PR agent), Jobs Copilot (ATS resume generator), Open Source (contributor finder), 8020 (skill accelerator), and Tublibot (RAG knowledge chatbot).",
        "Implemented real-time model streaming, integrated microservices, and collaborated on AWS deployment pipelines.",
        "Mentored junior engineers and led code review processes across distributed time zones.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Anambra Techies",
      location: "Anambra State, Nigeria",
      date: "Aug 2022 — Oct 2022",
      description:
        "Developed Fundin, a web application designed to streamline startup funding acquisition in Nigeria, securing 2nd place at the SMFest Hackathon.",
      highlights: [
        "Collaborated with UI/UX and backend engineers to translate design concepts into responsive interfaces and seamless API integrations.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Sungoldtech",
      location: "Imo State, Nigeria",
      date: "Aug 2022 — Sep 2022",
      description:
        "Contributed to Girma, a mentorship platform for seed- to Series A-stage startups.",
      highlights: [
        "Converted Figma designs into Next.js components using atomic design systems for scalable, reusable UI across the platform.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Dillali",
      location: "Tallinn, Estonia (Remote)",
      date: "Mar 2022 — Apr 2022",
      description:
        "Contributed to Dillali, an SME financial management and record-keeping tool spanning website, web app, and mobile app.",
      highlights: [
        "Implemented user-facing financial tracking workflows and collaborated with backend engineers on reliable data synchronization.",
      ],
    },
    {
      title: "Web Developer",
      company: "Krosa Model Schools",
      location: "Awka South, Nigeria",
      date: "Jan 2020 — May 2021",
      description:
        "Maintained the institutional web presence and engineered a customized student results portal from scratch with automated grading, student-specific PIN security, and administrative records management.",
    },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Okwudili-Joshua-Odumodu-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article className="resume active" data-page="resume">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="h2 article-title !mb-0">Resume</h2>

        {/* Download Resume Button */}
        <div>
          <button
            className="download-resume-btn flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md hover:brightness-110 active:scale-95"
            onClick={handleDownloadResume}
            style={{
              backgroundColor: "hsl(45, 100%, 72%)",
              color: "hsl(0, 0%, 15%)",
            }}
          >
            <IonIcon icon={downloadOutline} className="text-lg" />
            <span>Download Official Resume (PDF)</span>
          </button>
        </div>
      </header>

      <TimelineSection
        title="Professional Experience"
        icon={briefcaseOutline}
        items={experienceItems}
      />
      <TimelineSection
        title="Education"
        icon={bookOutline}
        items={educationItems}
      />
      <SkillsSection />
    </article>
  );
};

export default Resume;