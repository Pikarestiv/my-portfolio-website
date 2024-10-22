import { FC } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDown, eyeOutline } from "ionicons/icons";
import project1 from "../images/project-1.jpg";
import project2 from "../images/project-2.png";
import project3 from "../images/project-3.jpg";
import project4 from "../images/project-4.png";
import project5 from "../images/project-5.png";
import project6 from "../images/project-6.png";
import project7 from "../images/project-7.png";
import project8 from "../images/project-8.jpg";
import project9 from "../images/project-9.png";

const Portfolio: FC = () => {
  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>

            <div className="select-icon">
              <IonIcon icon={chevronDown} />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={project1} alt="finance" loading="lazy" />
              </figure>

              <h3 className="project-title">Finance</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={project2} alt="orizon" loading="lazy" />
              </figure>

              <h3 className="project-title">Orizon</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={project3} alt="fundo" loading="lazy" />
              </figure>

              <h3 className="project-title">Fundo</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={project4} alt="brawlhalla" loading="lazy" />
              </figure>

              <h3 className="project-title">Brawlhalla</h3>

              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={project5} alt="dsm." loading="lazy" />
              </figure>

              <h3 className="project-title">DSM.</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web design"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={project6} alt="metaspark" loading="lazy" />
              </figure>

              <h3 className="project-title">MetaSpark</h3>

              <p className="project-category">Web design</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={project7} alt="summary" loading="lazy" />
              </figure>

              <h3 className="project-title">Summary</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="applications"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={project8} alt="task manager" loading="lazy" />
              </figure>

              <h3 className="project-title">Task Manager</h3>

              <p className="project-category">Applications</p>
            </a>
          </li>

          <li
            className="project-item  active"
            data-filter-item
            data-category="web development"
          >
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={project9} alt="arrival" loading="lazy" />
              </figure>

              <h3 className="project-title">Arrival</h3>

              <p className="project-category">Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
