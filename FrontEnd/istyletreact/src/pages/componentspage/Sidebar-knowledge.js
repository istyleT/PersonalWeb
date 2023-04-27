import React from "react";
import { NavLink as Link } from "react-router-dom";
import './Sidebar-knowledge.css';
const SidebarKnowledge = () => {
                    return (
<nav className="aside-knowledge d-flex flex-column flex-shrink-0 py-2 px-1 bg-dark">
    <div className="border-bottom border-danger border-4 px-1 py-2 d-flex justify-content-center align-items-center">
      <span className="fs-2 fw-bold font-monospace">Knowlegde</span>
    </div>

    <ul className="nav nav-pills flex-column mt-3 mb-auto " >
      <li className="nav-item">
        <Link to="/knowledge/" className="nav-link link-light fw-bold fs-5 font-monospace" aria-current="page">
          <img src="../images/icons8-stack-of-paper-64.png" alt="icon-sheet" width="40px" height="40px"/>
          Cheat Sheet
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/knowledge/mainconcept" className="nav-link link-light fw-bold fs-5 font-monospace" >
          <img src="../images/icons8-concept-64.png" alt="icon-sheet" width="40px" height="40px"/>
          Main Concepts
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/knowledge/frontend" className="nav-link link-light fw-bold fs-5 font-monospace">
          <img src="../images/icons8-front-64.png" alt="icon-sheet" width="40px" height="40px"/>
           Frontend
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/knowledge/backend" className="nav-link link-light fw-bold fs-5 font-monospace">
          <img src="../images/icons8-backend1-64.png" alt="icon-sheet" width="40px" height="40px"/>
          Backend
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/knowledge/uxui" className="nav-link link-light fw-bold fs-5 font-monospace">
          <img src="../images/icons8-ux-60.png" alt="icon-sheet" width="40px" height="40px"/>
          UX/UI
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/knowledge/course" className="nav-link link-light fw-bold fs-5 font-monospace">
          <img src="../images/icons8-course-64.png" alt="icon-sheet" width="40px" height="40px"/>
          Course
        </Link>
      </li>
    </ul>
  </nav>

                    );
};
export default SidebarKnowledge;