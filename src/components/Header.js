import React from "react";
import NavTabs from "../NavTabs";

const styles = {
  headerStyle: {
    background: "purple",
    color: "white",
  },
  headingStyle: {
    fontSize: "50px",
  },
};

function Header({ currentPage, handlePageChange }) {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Charlie Nunn</h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;
