import { FC, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { ActiveSidebarComponent } from "./types";

const App: FC = () => {
  const [activeComponent, setActiveComponent] =
    useState<ActiveSidebarComponent>("about");

  const handleNav = (component: ActiveSidebarComponent) => {
    setActiveComponent(component);
  };

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar handleNav={handleNav} activeComponent={activeComponent} />
        <MainContent activeComponent={activeComponent} />
      </div>
    </main>
  );
};

export default App;
