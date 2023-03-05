import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./components/About";
import Contact from "./components/Contact";
import PreviousProjects from "./components/PreviousProjects";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Previous Projects") {
      return <PreviousProjects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
