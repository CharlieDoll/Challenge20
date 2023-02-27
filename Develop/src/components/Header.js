import React from "react";
import "../styles/Header.css";

const styles = {
  headerStyle: {
    background: "purple",
  },
  headingStyle: {
    fontSize: "100px",
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={sty.headingStyle}>Welcome to my Portfolio</h1>
    </header>
  );
}

export default Header;
