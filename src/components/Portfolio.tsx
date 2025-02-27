import { FC, useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { chevronDown, eyeOutline } from "ionicons/icons";

import bumpit from "../images/projects/bumpit.png";
import unspokenn from "../images/projects/unspokenn.png";
import clayGlobal from "../images/projects/clay-global.png";
import dumofield from "../images/projects/dumofield.png";
import mwexl from "../images/projects/mwexl.png";
import krosa from "../images/projects/krosa.png";
import chikaOdumodu from "../images/projects/chikaodufound.png";
import excel2sql from "../images/projects/excel2sql-main.png";
import ikeduStores from "../images/projects/iked.png";
import ginie from "../images/projects/ginie-home.png";
import passportParliament from "../images/projects/passparl-home-med.png";

const Portfolio: FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isSelectActive, setIsSelectActive] = useState(false);

  // Handle filter button click
  const handleFilterClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const filterValue = target.textContent?.toLowerCase() || "all";

    // Update active category
    setActiveCategory(filterValue);

    // Update active button styling
    document.querySelectorAll("[data-filter-btn]").forEach((btn) => {
      btn.classList.remove("active");
    });
    target.classList.add("active");

    // Update select value display if using dropdown
    const selectValue = document.querySelector("[data-selecct-value]");
    if (selectValue) {
      selectValue.textContent = target.textContent;
    }
  };

  // Handle select dropdown toggle
  const handleSelectToggle = () => {
    setIsSelectActive(!isSelectActive);
  };

  // Handle select item click from dropdown
  const handleSelectItemClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget;
    const filterValue = target.textContent?.toLowerCase() || "all";

    // Update active category
    setActiveCategory(filterValue);

    // Update select value display
    const selectValue = document.querySelector("[data-selecct-value]");
    if (selectValue) {
      selectValue.textContent = target.textContent;
    }

    // Close dropdown
    setIsSelectActive(false);

    // Update active button styling in main filter list
    document.querySelectorAll("[data-filter-btn]").forEach((btn) => {
      btn.classList.remove("active");
      if (btn.textContent?.toLowerCase() === filterValue) {
        btn.classList.add("active");
      }
    });
  };

  // Filter projects based on active category
  useEffect(() => {
    const projects = document.querySelectorAll("[data-filter-item]");

    projects.forEach((project) => {
      const categories = (
        project.getAttribute("data-category") || ""
      ).toLowerCase();

      if (activeCategory === "all" || categories.includes(activeCategory)) {
        project.classList.add("active");
      } else {
        project.classList.remove("active");
      }
    });
  }, [activeCategory]);

  return (
    <article className="portfolio active">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className="active"
              data-filter-btn
              onClick={handleFilterClick}
            >
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn onClick={handleFilterClick}>
              Websites
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn onClick={handleFilterClick}>
              Web Apps
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn onClick={handleFilterClick}>
              Mobile Apps
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn onClick={handleFilterClick}>
              UI/UX Design
            </button>
          </li>
        </ul>

        <div className={`filter-select-box ${isSelectActive ? "active" : ""}`}>
          <button
            className="filter-select"
            data-select
            onClick={handleSelectToggle}
          >
            <div className="select-value" data-selecct-value>
              {activeCategory === "all"
                ? "All"
                : activeCategory.charAt(0).toUpperCase() +
                  activeCategory.slice(1)}
            </div>

            <div className="select-icon">
              <IonIcon icon={chevronDown} />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item onClick={handleSelectItemClick}>
                All
              </button>
            </li>

            <li className="select-item">
              <button data-select-item onClick={handleSelectItemClick}>
                Websites
              </button>
            </li>

            <li className="select-item">
              <button data-select-item onClick={handleSelectItemClick}>
                Web Apps
              </button>
            </li>

            <li className="select-item">
              <button data-select-item onClick={handleSelectItemClick}>
                Mobile Apps
              </button>
            </li>

            <li className="select-item">
              <button data-select-item onClick={handleSelectItemClick}>
                UI/UX Design
              </button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li
            className="project-item active"
            data-filter-item
            data-category="mobile apps ui/ux design"
          >
            <a href="./projects/bumpit.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={bumpit} alt="BumpIt Dating App" loading="lazy" />
              </figure>

              <h3 className="project-title">BumpIt Dating App</h3>

              <p className="project-category">Mobile Apps, UI/UX Design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="websites"
          >
            <a href="./projects/clay-global.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={clayGlobal}
                  alt="Clay Global Services"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Clay Global Services</h3>

              <p className="project-category">Websites</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="websites web apps"
          >
            <a href="./projects/mwexl.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={mwexl}
                  alt="Mathematics World of Excellence"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Mathematics World of Excellence</h3>

              <p className="project-category">Websites, Web Apps</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="websites"
          >
            <a href="./projects/chika-odumodu-foundation.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={chikaOdumodu}
                  alt="Chika Odumodu Foundation"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Chika Odumodu Foundation</h3>

              <p className="project-category">Websites</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web apps ui/ux design"
          >
            <a href="./projects/unspokenn.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={unspokenn}
                  alt="Unspokenn Safety App"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Unspokenn Safety App</h3>

              <p className="project-category">Web Apps, UI/UX Design</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="websites web apps"
          >
            <a href="./projects/krosa.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={krosa}
                  alt="Krosa Model Schools Result Portal"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">
                Krosa Model Schools Result Portal
              </h3>

              <p className="project-category">Websites, Web Apps</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web apps"
          >
            <a href="./projects/dumofield.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={dumofield}
                  alt="Dumofield Farms Inventory System"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">
                Dumofield Farms Inventory System
              </h3>

              <p className="project-category">Web Apps</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web apps"
          >
            <a href="./projects/excel2sql.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={excel2sql} alt="Excel To SQL" loading="lazy" />
              </figure>

              <h3 className="project-title">Excel To SQL</h3>

              <p className="project-category">Web Apps</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="websites"
          >
            <a href="./projects/passport-parliament.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img
                  src={passportParliament}
                  alt="Passport Parliament"
                  loading="lazy"
                />
              </figure>

              <h3 className="project-title">Passport Parliament</h3>

              <p className="project-category">Websites</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="web apps"
          >
            <a href="./projects/ginie.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={ginie} alt="Ginie" loading="lazy" />
              </figure>

              <h3 className="project-title">Ginie</h3>

              <p className="project-category">Web Apps</p>
            </a>
          </li>

          <li
            className="project-item active"
            data-filter-item
            data-category="websites web apps"
          >
            <a href="./projects/ikedu-stores.html">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <IonIcon icon={eyeOutline} />
                </div>

                <img src={ikeduStores} alt="Ikedu Stores" loading="lazy" />
              </figure>

              <h3 className="project-title">Ikedu Stores</h3>

              <p className="project-category">Websites, Web Apps</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
