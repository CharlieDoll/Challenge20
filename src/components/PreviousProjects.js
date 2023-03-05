import React from "react";
import filmapedia from "../images/filmapedia.png";
import rythmn from "../images/rythmn.png";

const styles = {
  contentSectionStyles: {
    background: "lilac",
  },
  imageStyle: {
    width: "175px",
    height: "140px",
  },
};

function contentSection() {
  return (
    <section style={styles.contentSectionStyles} className="contentSection">
      <h2>Previous Projects</h2>
      <div>
        <h3>Filmpadia</h3>
        <div>
          <p>
            For this project we created a film search website that uses API's to
            find information from Wikipedia and then bring it forwards to the
            front end to be displayed for the user.
          </p>
        </div>
        <div>
          <a href="https://lacko3006.github.io/Filmapedia/">
            Click this link to view the deployed website
          </a>
        </div>
        <figure>
          <img style={styles.imageStyle} src={filmapedia}></img>
        </figure>
      </div>
      <h3>Rythmn Review</h3>
      <div>
        <p>
          In this project we created a full stack application, that allowed the
          user to rate music and artists, after creating a user login.
        </p>
      </div>
      <div>
        <a href="https://shrouded-woodland-67381.herokuapp.com/">
          Click this link to view the deployed website
        </a>
      </div>
      <img style={styles.imageStyle} src={rythmn}></img>
    </section>
  );
}

export default contentSection;
