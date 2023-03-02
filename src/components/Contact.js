import React from "react";

const styles = {
  ContactStyles: {
    background: "pink",
  },
};

function Contact() {
  return (
    <section style={styles.ContactStyles} className="Contact">
      <h2>Contact Information</h2>
      <p>Email: cvnunn31@gmail.com</p>
      <p>Tel.: 07710 560 867</p>
      <p>LinkedIn: </p>
    </section>
  );
}

export default Contact;
