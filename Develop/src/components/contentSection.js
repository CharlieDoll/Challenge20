import React from "react";
import "../styles/contentSection.css";

const styles = {
  contentSectionStyles: {
    background: "pink",
  },
};

function contentSection() {
  return (
    <section style={styles.contentSectionStyles} className="contentSection">
      <h2>Past Projects</h2>
      <p>Project 1</p>
      <p>Project 2</p>
      <p>Project 3</p>
    </section>
  );
}

export default contentSection;
