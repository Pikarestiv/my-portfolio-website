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

const SkillItem: FC<{ skill: string; proficiency: number }> = ({
  skill,
  proficiency,
}) => (
  <li className="skills-item">
    <div className="title-wrapper">
      <h5 className="h5">{skill}</h5>
      <data value={proficiency}>{proficiency}%</data>
    </div>
    <div className="skill-progress-bg">
      <div className={`skill-progress-fill w-[${proficiency}%]`} />
    </div>
  </li>
);

const SkillsSection: FC<{
  skills: Array<{ skill: string; proficiency: number }>;
}> = ({ skills }) => (
  <section className="skill">
    <h3 className="h3 skills-title">My Skills</h3>
    <ul className="skills-list content-card">
      {skills.map((skillItem, index) => (
        <SkillItem
          key={index}
          skill={skillItem.skill}
          proficiency={skillItem.proficiency}
        />
      ))}
    </ul>
  </section>
);

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
      title: "Lead Frontend Developer",
      date: "Nov 2022 — Present",
      description: "Nemo enim ipsam voluptatem blanditiis...",
    },
    {
      title: "Art Director",
      date: "2013 — 2015",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium...",
    },
    {
      title: "Web Designer",
      date: "2010 — 2013",
      description: "Nemo enims ipsam voluptatem, blanditiis praesentium...",
    },
  ];

  const skills = [
    { skill: "Web Design", proficiency: 80 },
    { skill: "Graphic Design", proficiency: 70 },
    { skill: "Branding", proficiency: 90 },
    { skill: "WordPress", proficiency: 50 },
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
