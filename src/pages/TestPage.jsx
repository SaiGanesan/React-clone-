import React, { useState, useEffect } from "react";
import "../styles/TestPage.css";

function TestPage() {
  const questions = [
    { q: "What is React and how does it work?", a: "React is a library for building UIs using components and virtual DOM." },
    { q: "What is 2 + 2?", a: "The result is 4." },
    { q: "What is useState in React?", a: "useState is a React Hook to manage component state." },
    { q: "Explain the concept of JSX in React.", a: "JSX allows HTML-like syntax inside JavaScript files for component rendering." },
    { q: "What is the capital of France?", a: "Paris." },
    { q: "Define Newton's Second Law.", a: "Force = mass × acceleration." },
    { q: "What is the square root of 144?", a: "12." },
    { q: "What does HTML stand for?", a: "HyperText Markup Language." },
    { q: "What is the boiling point of water?", a: "100°C at 1 atmospheric pressure." },
    { q: "What is useEffect used for in React?", a: "To perform side effects in functional components." },
    { q: "Name the longest river in the world.", a: "The Nile River." },
    { q: "What is the capital of Japan?", a: "Tokyo." },
    { q: "What is a JavaScript closure?", a: "A closure is a function that remembers variables from its outer scope." },
    { q: "How does the Internet work?", a: "It works through protocols like TCP/IP, DNS, and HTTP across networks." },
    { q: "What is the result of 3 * 3?", a: "9." },
    { q: "Name the tallest mountain in the world.", a: "Mount Everest." },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(
    new Array(questions.length).fill(false)
  );
  const [fullView, setFullView] = useState(false);
  const [showViewOptions, setShowViewOptions] = useState(false);

  // View options state
  const [viewOptions, setViewOptions] = useState({
    owner: false,
    type: false,
    marks: false,
    actions: false,
  });

  // Temporary selections (before clicking Apply)
  const [tempViewOptions, setTempViewOptions] = useState(viewOptions);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showViewOptions && !e.target.closest(".dropdown")) {
        setShowViewOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showViewOptions]);

  const handleToggle = (index) => {
    if (!fullView) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectedCheckboxes(filteredQuestions.map(() => checked));
  };

  const handleCheckboxChange = (index) => {
    const updated = [...selectedCheckboxes];
    updated[index] = !updated[index];
    setSelectedCheckboxes(updated);
  };

  const toggleShowMore = () => {
    setVisibleCount(visibleCount === 10 ? questions.length : 10);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setVisibleCount(10);
  };

  const handleTempViewOptionChange = (e) => {
    const { name, checked } = e.target;
    setTempViewOptions({ ...tempViewOptions, [name]: checked });
  };

  const handleApplyViewOptions = () => {
    setViewOptions(tempViewOptions);
    setShowViewOptions(false);
  };

  const filteredQuestions = questions.filter((item) =>
    item.q.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="test-page">
      <div className="inner-box">
        <div className="header-row">
          <h2>Test 1 Questions</h2>
          <div className="view-buttons">
            <button
              className={`view-btn ${fullView ? "active" : ""}`}
              onClick={() => setFullView(!fullView)}
            >
              Full View
            </button>

            <div className="dropdown">
              <button
                className="dropdown-toggle"
                onClick={() => setShowViewOptions(!showViewOptions)}
                aria-expanded={showViewOptions}
              >
                View
                <span
                  className={`dropdown-arrow ${showViewOptions ? "up" : "down"}`}
                ></span>
              </button>
              <ul className={`dropdown-menu ${showViewOptions ? "show" : ""}`}>
                {["owner", "type", "marks", "actions"].map((field) => (
                  <li className="dropdown-item" key={field}>
                    <label>
                      <input
                        type="checkbox"
                        name={field}
                        checked={tempViewOptions[field]}
                        onChange={handleTempViewOptionChange}
                      />
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </li>
                ))}
                <li>
                  <button className="apply-btn" onClick={handleApplyViewOptions}>
                    Apply
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <table className="questions-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAll}
                  checked={
                    filteredQuestions.length > 0 &&
                    filteredQuestions.slice(0, visibleCount).every(
                      (_, i) => selectedCheckboxes[i]
                    )
                  }
                />
              </th>
              <th className="table-heading">Questions</th>
              {viewOptions.owner && <th className="table-heading">Owner</th>}
              {viewOptions.type && <th className="table-heading">Type</th>}
              {viewOptions.marks && <th className="table-heading">Marks</th>}
              {viewOptions.actions && <th className="table-heading">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredQuestions.slice(0, visibleCount).map((item, i) => (
              <tr key={i}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedCheckboxes[i]}
                    onChange={() => handleCheckboxChange(i)}
                  />
                </td>
                <td className="question-cell" onClick={() => handleToggle(i)}>
                  <span
                    className={`question-text ${
                      fullView || expandedIndex === i ? "expanded" : ""
                    }`}
                  >
                    {fullView || expandedIndex === i
                      ? item.q
                      : item.q.length > 15
                      ? item.q.slice(0, 15) + "..."
                      : item.q}
                  </span>
                  {(fullView || expandedIndex === i) && (
                    <div className="answer-box">{item.a}</div>
                  )}
                </td>
                {viewOptions.owner && <td>Admin</td>}
                {viewOptions.type && (
                  <td>
                    {i % 3 === 0
                      ? "Theory"
                      : i % 3 === 1
                      ? "Numerical"
                      : "MCQ"}
                  </td>
                )}
                {viewOptions.marks && <td>{[5, 2, 1, 3, 2, 4, 3, 2][i % 8]}</td>}
                {viewOptions.actions && (
                  <td>
                    <i className="bi bi-files" style={{ marginRight: "8px" }}></i>
                    <i className="bi bi-pencil" style={{ marginRight: "8px" }}></i>
                    <i className="bi bi-trash" style={{ marginRight: "8px" }}></i>
                    <i className="bi bi-arrow-right" style={{ marginRight: "8px" }}></i>
                    <i className="bi bi-list"></i>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="footer-info">
          <div className="button-wrapper">
            {filteredQuestions.length > 10 && (
              <button className="load-more-btn" onClick={toggleShowMore}>
                {visibleCount === 10 ? "Load More" : "Show Less"}
              </button>
            )}
            <div className="question-count">
              Showing {Math.min(visibleCount, filteredQuestions.length)} of{" "}
              {filteredQuestions.length} questions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;
