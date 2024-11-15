import './App.css'
import {SidebarMenu} from "./components/SidebarMenu/SidebarMenu";
import {MainContent} from "./components/MainContent/mainContent";

export const App = () =>  {
  return (
    <div className="all-content">
      <div className="container">
      <SidebarMenu />
      <MainContent />
      </div>
    </div>
  )
};
