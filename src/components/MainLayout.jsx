import React from "react";
import Sidebar from "./Sidebar";
import TestPage from "../pages/TestPage";
import "../styles/MainLayout.css";

function MainLayout({ sidebarOpen }) {
  return (
    <div className="main-layout">
      <Sidebar isOpen={sidebarOpen} />
      <TestPage />
    </div>
  );
}

export default MainLayout;
