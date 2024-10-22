import { FC } from "react";
import { ActiveSidebarComponent } from "../types";

const Navbar: FC<NavbarProps> = ({ handleNav, activeComponent }) => {
  const navItems: { label: string; component: ActiveSidebarComponent }[] = [
    { label: "About", component: "about" },
    { label: "Resume", component: "resume" },
    { label: "Portfolio", component: "portfolio" },
    { label: "Contact", component: "contact" },
    // { label: "Blog", component: "blog" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map(({ label, component }) => (
          <li key={component} className="navbar-item">
            <button
              className={`navbar-link ${
                activeComponent === component ? "active" : ""
              }`}
              onClick={() => handleNav(component)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

interface NavbarProps {
  handleNav: (component: ActiveSidebarComponent) => void;
  activeComponent: ActiveSidebarComponent;
}
