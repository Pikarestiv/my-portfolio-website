import { FC } from "react";
import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";

const TimelineSection: FC<{
  title: string;
  items: Array<{ title: string; date: string; description: string }>;
}> = ({ title, items }) => (
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <IonIcon icon={bookOutline} />
      </div>
      <h3 className="h3">{title}</h3>
    </div>
    <ol className="timeline-list">
      {items.map((item, index) => (
        <li key={index} className="timeline-item">
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          <span>{item.date}</span>
          <p className="timeline-text">{item.description}</p>
        </li>
      ))}
    </ol>
  </section>
);

// const SkillItem: FC<{ skill: string; proficiency: number }> = ({
//   skill,
//   proficiency,
// }) => (
//   <li className="skills-item">
//     <div className="title-wrapper">
//       <h5 className="h5">{skill}</h5>
//       {/* <data value={proficiency}>{proficiency}%</data> */}
//     </div>
//     <div className="skill-progress-bg">
//       <div className={`skill-progress-fill w-[${proficiency}%]`} />
//     </div>
//   </li>
// );

const SkillCategory: FC<{ title: string; skills: string[] }> = ({
  title,
  skills,
}) => (
  <div>
    <h4
      className="text-lg font-medium mb-3"
      style={{ color: "hsl(45, 54%, 58%)" }}
    >
      {title}
    </h4>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li
          key={`${title}-${index}`}
          className="text-sm"
          style={{ color: "hsl(0, 0%, 84%)" }}
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

// const SkillItem: FC<{ skill: string }> = ({ skill }) => (
//   <li className="skills-item" style={{ color: "hsl(0, 0%, 84%)" }}>
//     <div className="title-wrapper">
//       <h5 className="h5">{skill}</h5>
//     </div>
//   </li>
// );

// const SkillsSection: FC<{
//   skills: Array<{ skill: string; proficiency: number }>;
// }> = ({ skills }) => (
//   <section className="skill">
//     <h3 className="h3 skills-title">My Skills</h3>
//     <ul className="skills-list content-card">
//       {skills.map((skillItem, index) => (
//         <SkillItem
//           key={index}
//           skill={skillItem.skill}
//           proficiency={skillItem.proficiency}
//         />
//       ))}
//     </ul>
//   </section>
// );

const SkillsSection: FC<{
  skills: Array<{ skill: string; proficiency: number }>;
}> = ({ skills }) => {
  // Manually assigned skills to categories
  const skillsByCategory = {
    core: ["TypeScript", "JavaScript", "React.js", "Tailwind CSS"],
    frameworks: [
      "Next.js",
      "Material-UI",
      "Express.js",
      "Node.js",
      "React Native",
    ],
    backend: ["MongoDB", "MySQL", "PHP", "RESTful APIs"],
    tools: [
      "Git",
      "Agile Methodologies",
      "UI/UX Implementation",
      "Responsive Design",
      "AWS",
    ],
  };

  // Category titles
  const categories = [
    { id: "core", title: "Core Technologies" },
    { id: "frameworks", title: "Frameworks & Libraries" },
    { id: "backend", title: "Backend & Database" },
    { id: "tools", title: "Development Tools" },
  ];

  return (
    <section className="skill">
      <h3 className="h3 skills-title" style={{ color: "hsl(45, 54%, 58%)" }}>
        My Skills
      </h3>

      <ul className="skills-list content-card">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <SkillCategory
              key={category.id}
              title={category.title}
              skills={
                skillsByCategory[category.id as keyof typeof skillsByCategory]
              }
            />
          ))}
        </div>
      </ul>
    </section>
  );
};

const Resume: FC = () => {
  const educationItems = [
    {
      title: "Nnamdi Azikiwe University, Awka",
      date: "2008 — 2013",
      description: "B. Eng. Chemical Engineering",
    },
    {
      title: "West African Senior School Certificate Examination",
      date: "2007",
      description: "W.A.S.S.C.E.",
    },
  ];

  const experienceItems = [
    {
      title: "Mobile/Frontend Developer",
      company: "MS. SOUMYA MANDALAPU",
      location: "USA",
      date: "Feb 2025 — Present",
      description:
        "Developing Bumpit, a location-based dating app using React Native, TypeScript, and NativeWind. Implementing key features including authentication, geolocation matching, real-time chat, and profile management. Optimizing for performance and ensuring scalability through best coding practices.",
    },
    {
      title: "Lead Frontend Developer",
      company: "TUBLIAN",
      location: "Ohio, USA",
      date: "Nov 2022 — Present",
      description:
        "Developing Tublian, a platform empowering developers to build software businesses with AI-driven support. Working on AI-powered features including Tublian OS, Job's Copilot, and Open Source project finder. Transforming UI/UX designs into responsive interfaces, implementing front-facing features, and collaborating with cross-functional teams on microservices.",
    },
    {
      title: "Frontend Developer",
      company: "MS. SOUMYA MANDALAPU",
      location: "USA",
      date: "Oct 2024 — Present",
      description:
        "Developing Unspokenn, a web application for anonymous abuse reporting across the United States. Building reusable components with React.JS, TypeScript, and Tailwind CSS. Implementing accessibility best practices and working in an agile environment with daily stand-ups and code reviews.",
    },
    {
      title: "Web Developer",
      company: "PASSPORT PARLIAMENT",
      location: "Lagos, Nigeria",
      date: "Jul 2023 — Oct 2023",
      description:
        "Developed the official website for Passport Parliament, a travel agency providing passport processing and consultation services. Created an intuitive UI with interactive features for service listings, inquiry forms, and customer testimonials. Optimized website performance and SEO to improve search rankings.",
    },
    {
      title: "Frontend Developer",
      company: "ANAMBRA TECHIES",
      location: "Anambra, Nigeria",
      date: "Sep 2022 — Oct 2022",
      description:
        "Secured 2nd place in the SMFest Hackathon, developing Fundin, a web application streamlining funding acquisition for Nigerian startups. Translated UI/UX design concepts into responsive web pages and ensured smooth integration with backend services. Participated in code reviews, testing, and debugging.",
    },
    {
      title: "Frontend Developer",
      company: "SUNGOLDTECH",
      location: "Imo, Nigeria",
      date: "Aug 2022 — Sep 2022",
      description:
        "Contributed to Girma, a mentorship platform for seed to series A tech startups. Converted Figma designs into Next.js code using atomic design system for consistent UI components. Ensured the platform was mobile-responsive, performance-optimized, and built for scalability.",
    },
    {
      title: "Frontend Developer",
      company: "DILLALI",
      location: "Tallinn, Estonia",
      date: "Mar 2022 — Apr 2022",
      description:
        "Contributed to Dillali, a financial management tool for SMBs. Worked across multiple codebases including website, web app, and mobile app. Led implementation of user-facing features and collaborated with design and backend teams to ensure smooth data flow and application functionality.",
    },
    {
      title: "Full-stack Developer",
      company: "MR. AKIN AKINLOYE",
      location: "England, UK",
      date: "Nov 2021 — Jan 2022",
      description:
        "Developed Excel2SQL, a custom application for importing Excel data into MySQL databases for efficient querying and reporting. Led agile development with weekly sprints and pair-programming. Managed and maintained MySQL database, ensuring data integrity and optimizing performance.",
    },
    {
      title: "Full-stack Developer",
      company: "KROSA MODEL SCHOOLS",
      location: "Anambra, Nigeria",
      date: "Jan 2020 — May 2021",
      description:
        "Developed a customized results portal with features for student result uploads, secure access via PINs, automated grading, and comprehensive admin dashboard. Led computer studies classes and managed ICT infrastructure including installations, updates, and troubleshooting.",
    },
    {
      title: "Full-stack Developer",
      company: "DUMOFIELD FARMS",
      location: "Anambra, Nigeria",
      date: "Mar 2018 — Dec 2018",
      description:
        "Led development of a stock inventory management application to streamline operations and improve tracking efficiency. Designed the system architecture and implemented iterative development with continuous testing. Provided comprehensive documentation and ongoing maintenance.",
    },
  ];

  const skills = [
    { skill: "TypeScript", proficiency: 95 },
    { skill: "JavaScript", proficiency: 95 },
    { skill: "React.js", proficiency: 90 },
    { skill: "Next.js", proficiency: 85 },
    { skill: "Tailwind CSS", proficiency: 90 },
    { skill: "Material-UI", proficiency: 85 },
    { skill: "Node.js", proficiency: 80 },
    { skill: "Express.js", proficiency: 80 },
    { skill: "MongoDB", proficiency: 75 },
    { skill: "MySQL", proficiency: 75 },
    { skill: "UI/UX Implementation", proficiency: 85 },
    { skill: "Responsive Design", proficiency: 90 },
    { skill: "Git", proficiency: 85 },
    { skill: "Agile Methodologies", proficiency: 80 },
    { skill: "PHP", proficiency: 70 },
  ];

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <TimelineSection title="Education" items={educationItems} />
      <TimelineSection title="Experience" items={experienceItems} />
      <SkillsSection skills={skills} />
    </article>
  );
};

export default Resume;
