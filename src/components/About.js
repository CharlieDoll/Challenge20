import React from "react";
import portrait from "../images/portrait.png";

const styles = {
  AboutStyles: {
    background: "lilac",
  },
  imageStyle: {
    width: "120px",
    height: "150px",
  },
};

function about() {
  return (
    <section style={styles.AboutStyles} className="About">
      <h2>About</h2>
      <div>
        <p>
          Hi, my name is Charlie. I studied coding at Birmingham University. I
          specialise in backend coding. Please take a look at my past projects
          listed in the 'Previous Projects' section. If you have any questions
          aboutany of these projects or would like to speak with me about a
          future project, please use the contact information in the 'Contact"
          section below. I look forward to hearing from you.
        </p>
        <figure>
          <img style={styles.imageStyle} src={portrait}></img>
        </figure>
      </div>
    </section>
  );
}

export default about;
