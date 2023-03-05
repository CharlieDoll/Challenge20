import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import PreviousProjects from "./components/PreviousProjects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <Portfolio />
      <About id="#About" />
      <PreviousProjects id="#PreviousProjects" />
      <Contact id="#Contact" />
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
