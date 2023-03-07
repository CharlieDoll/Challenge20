import React from "react";
import filmapedia from "../images/filmapedia.png";
import rythmn from "../images/Rythmn.png";
import themepark from "../images/themepark.png";

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
      <div>
        <h3>Roller Ride</h3>
      </div>
      <div>
        <p>
          This project is a full stack application using MERN. It was designed
          so that the user could purchase tickets for any theme park, zoo or
          safari park and view their available options, after creating a user
          account. It also contained sections on weather, a user blog and
          available hotels at these locations. As well as a contact section for
          any help and advice.
        </p>
      </div>
      <div>
        <a href="https://github.com/HusaamNT/reactRollerRide">
          Click this link to view the GitHub repository
        </a>
        <div>
          <img style={styles.imageStyle} src={themepark}></img>
        </div>
      </div>
    </section>
  );
}

export default contentSection;
