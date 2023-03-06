import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import PreviousProjects from "./components/PreviousProjects";

export default function PortfolioContainer({ currentPage }) {
  const renderPage = () => {
    console.log(currentPage);
    if (currentPage === "About") {
      return (
        <>
          <a id="About" />
          <About />
        </>
      );
    }
    if (currentPage === "PreviousProjects") {
      return (
        <>
          <a id="PreviousProjects" />
          <PreviousProjects />
        </>
      );
    }
    if (currentPage === "Contact") {
      return (
        <>
          <a id="Contact" />
          <Contact />
        </>
      );
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return <div>{renderPage()}</div>;
}
