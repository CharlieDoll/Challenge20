import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Previous Projects"
          onClick={() => handlePageChange("Previous Projects")}
          className={
            currentPage === "Previous Projects" ? "nav-link active" : "nav-link"
          }
        >
          Previous Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
