import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/educationimg.png";

function Navbar({ toggleSidebar, toggleNavbar, sidebarOpen, navMenuOpen }) {
  return (
    <nav className="navbar">
      <div className="left-controls">
        <button className="arrow-toggle" onClick={toggleSidebar}>
          <i className={`bi ${sidebarOpen ? "bi-arrow-left-short" : "bi-arrow-right-short"}`}></i>
        </button>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
      </div>

      <ul className={`nav-links ${navMenuOpen ? "open" : ""}`}>
         <li>
          <i className="bi bi-folder2-open"></i>
          Dashboard
        </li>
        <li className="active">
          <i className="bi bi-speedometer2"></i>
          Tests
        </li>
        <li>
          <i className="bi bi-folder2-open"></i>
          Question Banks
        </li>
        <li>
          <i className="bi bi-easel"></i>
          Classes
        </li>
        <li>
          <i className="bi bi-person-lines-fill"></i>
          Teachers
        </li>
      </ul>

      <div className="admin-avatar">
        <button className="menu-toggle" onClick={toggleNavbar}>
          <i className="bi bi-list"></i>
        </button>
        <div className="avatar-circle">A</div>
        <span className="admin-text">Admin</span>
      </div>
    </nav>
  );
}

export default Navbar;
