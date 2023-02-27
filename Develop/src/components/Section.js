import React from "react";
import "../styles/Section.css";

const styles = {
  sectionStyles: {
    background: "pink",
  },
};

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">
      <h2>Past Projects</h2>
      <p>Project 1</p>
      <p>Project 2</p>
      <p>Project 3</p>
    </section>
  );
}

export default Section;
