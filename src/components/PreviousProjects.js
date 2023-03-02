import React from "react";
import filmapedia from "../images/filmapedia.png";
import Rythmn from "../images/Rythmn.png";

const styles = {
  contentSectionStyles: {
    background: "pink",
  },
  imageStyle: {
    width: "150px",
    height: "150px",
  },
};

function contentSection() {
  return (
    <section style={styles.contentSectionStyles} className="contentSection">
      <h2>Past Projects</h2>
      <h3>Filmpadia</h3>
      <img style={styles.imageStyle} src={filmapedia}></img>
      <h3>Rythmn Rater</h3>
      <img style={styles.imageStyle} src={Rythmn}></img>
    </section>
  );
}

export default contentSection;
