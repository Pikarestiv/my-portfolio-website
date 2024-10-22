import { FC } from "react";
import { ActiveSidebarComponent } from "../types";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./Blog";

const components = {
  about: About,
  resume: Resume,
  portfolio: Portfolio,
  contact: Contact,
  blog: Blog,
};

const MainContent: FC<MainContentProps> = ({ activeComponent }) => {
  const ComponentToRender = components[activeComponent];

  return <>{ComponentToRender && <ComponentToRender />}</>;
};

export default MainContent;

interface MainContentProps {
  activeComponent: ActiveSidebarComponent;
}
