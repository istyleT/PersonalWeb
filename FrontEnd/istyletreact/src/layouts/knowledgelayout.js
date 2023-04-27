import React from "react";
import SidebarKnowledge from "../pages/componentspage/Sidebar-knowledge";
import { Outlet } from "react-router-dom";
const Knowledgelayout = () => {
  
                    return (
                      <>
                      <SidebarKnowledge/>
                      <Outlet/>
                       </>
                 
                      );
};
export default Knowledgelayout;