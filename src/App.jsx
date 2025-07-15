import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainLayout from "./components/MainLayout";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);   // Sidebar toggle (← →)
  const [navMenuOpen, setNavMenuOpen] = useState(false);  // Mobile hamburger menu toggle

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleNavbarMenu = () => {
    setNavMenuOpen((prev) => !prev);
  };

  return (
    <div className="app-container">
      <Navbar
        toggleSidebar={toggleSidebar}
        toggleNavbar={toggleNavbarMenu}
        sidebarOpen={sidebarOpen}       // <-- needed for arrow direction
        navMenuOpen={navMenuOpen}       // <-- needed for mobile nav dropdown
      />
      <MainLayout sidebarOpen={sidebarOpen} />
    </div>
  );
}

export default App;
