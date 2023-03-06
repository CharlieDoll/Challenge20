import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import PreviousProjects from "./components/PreviousProjects";
import About from "./components/About";
import Contact from "./components/Contact";
import PortfolioContainer from "./PortfolioContainer";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div className="portfolio-app">
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <Portfolio />
      <PortfolioContainer currentPage={currentPage} />
      <PreviousProjects id="#PreviousProjects" />
      <Footer />
    </div>
  );
}

export default App;

// import React from "react";
// import JSXVariables from "./components/JSXVariables";

// function App() {
//   return <JSXVariables />;
// }

// export default App;
