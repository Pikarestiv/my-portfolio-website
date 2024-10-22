import { FC, useState } from "react";
import {
  mailOutline,
  phonePortraitOutline,
  calendarOutline,
  locationOutline,
  logoFacebook,
  logoTwitter,
  logoInstagram,
  chevronDown,
} from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import avatar from "../images/my-avatar.png";
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
        <figure className="avatar-box">
          <img src={avatar} alt="avatar" width={80} />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Okwudili Odumodu">
            Okwudili Odumodu
          </h1>
          <p className="title">Software Developer</p>
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
          </ContactItem>
          <ContactItem icon={phonePortraitOutline} title="Phone">
            <a href="tel:+2348141230877" className="contact-link">
              +234 (814) 123-0877
            </a>
          </ContactItem>
          <ContactItem icon={calendarOutline} title="Birthday">
            <time dateTime="1992-08-01">August 01, 1992</time>
          </ContactItem>
          <ContactItem icon={locationOutline} title="Location">
            <address>Anambra, Nigeria</address>
          </ContactItem>
        </ul>
        <div className="separator" />
        <ul className="social-list">
          <li className="social-item">
            <a
              target="_blank"
              href="https://www.fb.me/pikarestiv"
              className="social-link"
            >
              <IonIcon icon={logoFacebook} />
            </a>
          </li>
          <li className="social-item">
            <a
              target="_blank"
              href="https://www.x.com/pikarestiv"
              className="social-link"
            >
              <IonIcon icon={logoTwitter} />
            </a>
          </li>
          <li className="social-item">
            <a
              target="_blank"
              href="https://www.instagram.com/joshcodesjs"
              className="social-link"
            >
              <IonIcon icon={logoInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
