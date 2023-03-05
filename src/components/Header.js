import React from "react";

const styles = {
  headerStyle: {
    background: "purple",
    color: "white",
  },
  headingStyle: {
    fontSize: "50px",
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Charlie Nunn</h1>
      <nav className="navbar">
        <a href="#About">About</a>
        <a href="#contentSection">Previous Projects</a>
        <a href="#Contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
