import { FC, useState } from "react";
import {
  mailOutline,
  phonePortraitOutline,
  locationOutline,
  logoTwitter,
  logoInstagram,
  logoLinkedin,
  logoGithub,
  chevronDown,
  globeOutline,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import profPic from "../images/profile-pic_200x200.png";
import "../App.css";

const ContactItem: FC<{
  icon: string;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <li className="contact-item">
    <div className="icon-box">
      <IonIcon icon={icon} />
    </div>
    <div className="contact-info">
      <p className="contact-title">{title}</p>
      {children}
    </div>
  </li>
);

const Sidebar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <aside className={`sidebar ${isSidebarOpen ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box !bg-none">
          <img src={profPic} alt="avatar" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Okwudili Joshua Odumodu">
            Okwudili Odumodu
          </h1>
          <p className="title">Senior Frontend Engineer</p>
          <p className="text-xs text-amber-300/80 mt-1 font-medium">
            Co-Founder, Dumostech
          </p>
        </div>
        <button
          className="info_more-btn"
          data-sidebar-btn
          onClick={toggleSidebar}
        >
          <span>Show Contacts</span>
          <IonIcon icon={chevronDown} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          <ContactItem icon={mailOutline} title="Email">
            <a href="mailto:okwyodumodu@gmail.com" className="contact-link">
              okwyodumodu@gmail.com
            </a>
            <a href="mailto:josh@dumostech.com" className="contact-link">
              josh@dumostech.com
            </a>
          </ContactItem>
          <ContactItem icon={phonePortraitOutline} title="Phone">
            <a href="tel:+2348141230877" className="contact-link">
              +234 (814) 123-0877
            </a>
          </ContactItem>
          <ContactItem icon={locationOutline} title="Location">
            <address>Anambra State, Nigeria</address>
          </ContactItem>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.linkedin.com/in/pikarestiv"
              className="social-link"
              title="LinkedIn"
            >
              <IonIcon icon={logoLinkedin} />
            </a>
          </li>
          <li className="social-item">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/pikarestiv"
              className="social-link"
              title="GitHub"
            >
              <IonIcon icon={logoGithub} />
            </a>
          </li>
          <li className="social-item">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.x.com/pikarestiv"
              className="social-link"
              title="X (Twitter)"
            >
              <IonIcon icon={logoTwitter} />
            </a>
          </li>
          <li className="social-item">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.instagram.com/joshcodesjs"
              className="social-link"
              title="Instagram"
            >
              <IonIcon icon={logoInstagram} />
            </a>
          </li>
          <li className="social-item">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://dumostech.com"
              className="social-link"
              title="Dumostech Consultancy"
            >
              <IonIcon icon={globeOutline} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
