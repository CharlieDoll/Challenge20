import React from "react";
import social from "../images/social.jpg";

const styles = {
  ContactStyles: {
    background: "lilac",
  },
  imageStyle: {
    width: "150px",
    height: "150px",
  },
};

function Contact() {
  return (
    <section style={styles.ContactStyles} className="Contact">
      <h2>Contact Information</h2>
      <div className="container">
        <div>
          <p>Email: cvnunn31@gmail.com</p>
          <p>Tel.: 07710 560 867</p>
          <p>LinkedIn: </p>
        </div>
        <div>
          <img style={styles.imageStyle} src={social}></img>
        </div>
      </div>
    </section>
  );
}

export default Contact;
