import { FC, useState } from "react";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";

import iconDev from "../images/icon-dev.svg";
import iconApp from "../images/icon-app.svg";
import iconDesign from "../images/icon-design.svg";
import iconPhoto from "../images/icon-photo.svg";
import iconQuote from "../images/icon-quote.svg";

import avatar1 from "../images/avatar-1.png";
import avatar2 from "../images/avatar-2.png";
import avatar3 from "../images/avatar-3.png";
import avatar4 from "../images/avatar-4.png";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  date: string;
  text: string;
  modalParagraphs?: string[];
}

const testimonialsData: Testimonial[] = [
  {
    id: "nilanjan",
    name: "Nilanjan Raychaudhuri",
    role: "Founder & CEO",
    company: "Tublian",
    avatar: avatar1,
    date: "15 November, 2024",
    text: "When you're scaling an AI platform across 13,000+ developers worldwide, you need engineers who stay razor-sharp when requirements shift. Josh didn't just build frontend components; he took full ownership of Tublian OS and our AI agent copilot interfaces. He has this rare gift of turning streaming LLM outputs into a fast, intuitive experience that users love.",
    modalParagraphs: [
      "When you're scaling an AI platform across 13,000+ developers worldwide, you need engineers who stay razor-sharp when requirements shift. Josh didn't just build frontend components; he took full ownership of Tublian OS and our AI agent copilot interfaces. He has this rare gift of turning streaming LLM outputs into a fast, intuitive experience that users love.",
      "What sets Josh apart is his calm ownership under pressure. Whether refactoring our core Next.js architecture down to sub-second load times or aligning design tokens across 500+ atomic components while shipping five AI products (Tublian OS, Job's Copilot, Open Source, 8020, and Tublibot), he never cuts corners. He combines deep engineering chops with a genuine feel for user experience.",
    ],
  },
  {
    id: "soumya",
    name: "Soumya Mandalapu",
    role: "Product Owner & Client",
    company: "Bumpit & Unspokenn (USA)",
    avatar: avatar2,
    date: "12 October, 2024",
    text: "Collaborating across 6 time zones on Bumpit and Unspokenn could easily have been a coordination headache, but Josh made it effortless. When we hit tough real-time WebSocket connection drops and geolocation synchronization quirks on mobile, Josh didn't point fingers—he dug into the packet traces, refactored our reconnection state machine, and solved it in 48 hours.",
    modalParagraphs: [
      "Collaborating across 6 time zones on Bumpit and Unspokenn could easily have been a coordination headache, but Josh made it effortless. When we hit tough real-time WebSocket connection drops and geolocation synchronization quirks on mobile, Josh didn't point fingers—he dug into the packet traces, refactored our reconnection state machine, and solved it in 48 hours.",
      "On Bumpit, he built real-time WebSocket chat, geolocation matching, and multi-device session management with automated app store build pipelines. On Unspokenn, he treated zero-knowledge anonymity and sensitive data safeguards not as a checklist item, but as a core architectural constraint. His communication is always clear and proactive—he anticipates edge cases long before they reach production.",
    ],
  },
  {
    id: "akin",
    name: "Akin Akinloye",
    role: "Technology Consultant",
    company: "GINIE & Excel2SQL (UK)",
    avatar: avatar4,
    date: "18 January, 2022",
    text: "Patience. Infinite patience. No shortcuts. Josh's work on Excel2SQL and the UK GINIE portal was a masterclass in calm problem solving. Even when client datasets were messy or specifications shifted mid-sprint, Josh kept every milestone transparent, delivered clean, bulletproof code, and suggested smarter architectural alternatives we didn't know we needed.",
    modalParagraphs: [
      "Patience. Infinite patience. No shortcuts. Josh's work on Excel2SQL and the UK GINIE portal was a masterclass in calm problem solving. Even when client datasets were messy or specifications shifted mid-sprint, Josh kept every milestone transparent, delivered clean, bulletproof code, and suggested smarter architectural alternatives we didn't know we needed.",
      "Pair-programming with him was a genuine highlight. He has a remarkable instinct for taking chaotic business rules and mapping them into intuitive UI workflows with rock-solid data integrity. Always brings original ideas to the table and executes without fuss.",
    ],
  },
  {
    id: "dumostech-client",
    name: "Verified Enterprise Client",
    role: "Commercial Platform Client",
    company: "Dumostech Client Network",
    avatar: avatar3,
    date: "14 April, 2023",
    text: "Very well thought out and articulate communication. Clear milestones, deadlines, and fast work—even if the client is being careless. The best part... always solving hard blockers with great, original ideas! Josh treats your product as if he were a co-founder himself.",
    modalParagraphs: [
      "Very well thought out and articulate communication. Clear milestones, deadlines, and fast work—even if the client is being careless. The best part... always solving hard blockers with great, original ideas! Josh treats your product as if he were a co-founder himself.",
      "Over the years of partnering with Dumostech, Josh has consistently proven to be the most dependable technical lead we've worked with. No excuses, no unnecessary technical jargon—just high-performance software delivered right on time.",
    ],
  },
  {
    id: "emeka",
    name: "Emeka Dijeh",
    role: "Managing Director",
    company: "Clay Global Services",
    avatar: avatar3,
    date: "28 August, 2023",
    text: "We needed our corporate platform overhauled rapidly to bid on competitive international contracts. Josh delivered a high-converting, lightning-fast digital presence ahead of schedule. When prospective international partners visit our site today, the visual polish and instant load times immediately communicate trust.",
    modalParagraphs: [
      "We needed our corporate platform overhauled rapidly to bid on competitive international contracts. Josh delivered a high-converting, lightning-fast digital presence ahead of schedule. When prospective international partners visit our site today, the visual polish and instant load times immediately communicate trust.",
      "His attention to responsive layout across every device and adherence to clean performance budgets made all the difference. He is a consummate professional who takes genuine pride in delivery.",
    ],
  },
  {
    id: "chika",
    name: "Chika Odumodu",
    role: "Founder",
    company: "Chika Odumodu Foundation",
    avatar: avatar4,
    date: "10 June, 2023",
    text: "Josh didn't just build us a website; he gave our community outreach a legitimate digital heartbeat. He sat down with our field team, understood the reality of slow 3G connectivity in rural areas, and built an ultra-lightweight donation and impact portal that loads instantly on any phone.",
    modalParagraphs: [
      "Josh didn't just build us a website; he gave our community outreach a legitimate digital heartbeat. He sat down with our field team, understood the reality of slow 3G connectivity in rural areas, and built an ultra-lightweight donation and impact portal that loads instantly on any phone.",
      "Our donors and international partners frequently comment on how transparent and easy it is to navigate our campaigns. That level of empathy and human-centered design is rare in software engineering.",
    ],
  },
  {
    id: "zikora",
    name: "Zikora Chukwuka",
    role: "Community Lead",
    company: "Anambra Techies & SMFest",
    avatar: avatar2,
    date: "22 September, 2022",
    text: "During the intense 48-hour SMFest Hackathon, while most teams were exhausted and debugging broken demos, Josh led the Fundin build with utter poise. His frontend was responsive, stunning, and worked without a hitch during the live pitch. That 2nd place finish was pure technical execution.",
    modalParagraphs: [
      "During the intense 48-hour SMFest Hackathon, while most teams were exhausted and debugging broken demos, Josh led the Fundin build with utter poise. His frontend was responsive, stunning, and worked without a hitch during the live pitch. That 2nd place finish was pure technical execution.",
      "Josh is a pillar of our regional developer ecosystem. His ability to guide younger developers while delivering high-speed production code sets an incredible benchmark for the engineering community.",
    ],
  },
  {
    id: "ikem",
    name: "Ikem Odumodu",
    role: "Operations Director",
    company: "Dumofield Farms",
    avatar: avatar1,
    date: "12 December, 2018",
    text: "Managing poultry and feed stock manually on paper was causing costly tracking errors. Josh came down to the farm floor to understand how feed was weighed and bagged, then built a custom inventory web app tailored to our field staff. It has run reliably for years and completely transformed our operations.",
    modalParagraphs: [
      "Managing poultry and feed stock manually on paper was causing costly tracking errors. Josh came down to the farm floor to understand how feed was weighed and bagged, then built a custom inventory web app tailored to our field staff. It has run reliably for years and completely transformed our operations.",
      "He designed the app with large, clear tap targets and offline logging so our handlers could use it in the sheds without internet. His pragmatic, hands-on engineering mindset solved a real business bottleneck.",
    ],
  },
];

const About: FC = () => {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const openModal = (t: Testimonial) => {
    setSelectedTestimonial(t);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a <strong>Senior Frontend Engineer</strong> with{" "}
          <strong>8+ years of experience</strong> architecting and delivering
          production web applications, SaaS platforms, and consumer-facing
          digital products. My core expertise centers on{" "}
          <strong>React, Next.js, and TypeScript</strong>, supported by deep
          full-stack engineering across <strong>Node.js, NestJS, Laravel</strong>
          , and cloud infrastructure.
        </p>
        <br />
        <p>
          As Co-Founder and Frontend Lead at{" "}
          <a
            href="https://dumostech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:underline font-medium inline"
          >
            Dumostech
          </a>
          , I have directed the delivery of <strong>20+ commercial platforms</strong>{" "}
          for clients across Nigeria, the United States, the United Kingdom,
          Canada, and Estonia. International delivery has instilled rigorous
          standards for clean component architecture, comprehensive testing, and
          accessibility, while operating in Nigeria has driven my focus on
          offline-tolerant architecture, minimal payload budgets, and graceful
          degradation under constrained connectivity.
        </p>
        <br />
        <p>
          I combine hands-on engineering with technical product leadership and
          applied AI workflows — from building autonomous coding agents and
          evaluating LLM reasoning data to engineering real-time streaming interfaces
          and offline-first desktop/mobile platforms.
        </p>
      </section>

      {/* Services / What I Do */}
      <section className="service">
        <h3 className="h3 service-title">What I Do</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDev} alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Frontend Architecture &amp; Web Apps
              </h4>

              <p className="service-item-text">
                Enterprise-grade React, Next.js, and TypeScript web applications
                with atomic design systems, end-to-end type safety, modern state
                management (TanStack Query, Zustand), and Core Web Vitals optimization.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconApp} alt="Mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Mobile &amp; Cross-Platform Apps
              </h4>

              <p className="service-item-text">
                Performant iOS and Android applications via React Native/Expo and
                lightweight desktop apps with Tauri, featuring local SQLite
                persistence, offline-first sync engines, and real-time WebSockets.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDesign} alt="Full-stack icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Full-Stack &amp; Cloud Integration
              </h4>

              <p className="service-item-text">
                Robust backends with Node.js, NestJS, and Laravel, paired with
                PostgreSQL, MySQL, and Redis. Containerized deployments with
                Docker, automated GitHub Actions CI/CD, and AWS infrastructure.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconPhoto} alt="AI icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">
                Applied AI &amp; Intelligent Products
              </h4>

              <p className="service-item-text">
                AI agents, LLM-powered user experiences, model response evaluation
                against rigorous reasoning rubrics, OpenAI/Anthropic API
                integrations, and grounded RAG knowledge assistants.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonialsData.map((t) => (
            <li
              key={t.id}
              className="testimonials-item cursor-pointer"
              onClick={() => openModal(t)}
            >
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img src={t.avatar} alt={t.name} width="60" />
                </figure>

                <h4 className="h4 testimonials-item-title">{t.name}</h4>
                <p className="text-xs text-amber-400/90 mb-2 font-medium">
                  {t.role} · {t.company}
                </p>

                <div className="testimonials-text">
                  <p>{t.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Modal */}
      <div
        className={`modal-container ${selectedTestimonial ? "active" : ""}`}
        data-modal-container
        style={{ display: selectedTestimonial ? "flex" : "none" }}
      >
        <div className="overlay" data-overlay onClick={closeModal}></div>

        {selectedTestimonial && (
          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              data-modal-close-btn
              onClick={closeModal}
              aria-label="Close modal"
            >
              <IonIcon icon={closeOutline} />
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  width="80"
                />
              </figure>

              <img src={iconQuote} alt="quote icon" width="30" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title">{selectedTestimonial.name}</h4>
              <p className="text-xs text-amber-400 font-medium mb-1">
                {selectedTestimonial.role} · {selectedTestimonial.company}
              </p>

              <time dateTime={selectedTestimonial.date}>
                {selectedTestimonial.date}
              </time>

              <div>
                {(
                  selectedTestimonial.modalParagraphs || [
                    selectedTestimonial.text,
                  ]
                ).map((paragraph, index) => (
                  <p key={index} className="mb-3 text-sm leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </article>
  );
};

export default About;