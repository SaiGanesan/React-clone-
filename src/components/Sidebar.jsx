import React from "react";
import "../styles/Sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${!isOpen ? "hidden" : ""}`}>
      <button className="add-question-btn">ADD QUESTION</button>
      <div className="divider"></div>

      <div className="sections">
        <p>SNAP SHOT</p>
      </div>

      <div className="sections">
        <p>SECTIONS</p>
        <ul>
          <li><i className="bi bi-plus"></i>New Section</li>
          <li className="circle red-circle">Section 1</li>
          <li className="circle blue-circle">Section 2</li>
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uncategorized (5)</li>
        </ul>
      </div>

      <div className="test-info">
        <p>TEST INFORMATION</p>
        <ul>
          <li className="circle gray-circle">Marks : (10)</li>
          <li className="circle gray-circle">No. of Q : (10)</li>
          <li className="circle gray-circle">Neg : (10)</li>
          <li className="circle gray-circle">Duration : (10)</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
