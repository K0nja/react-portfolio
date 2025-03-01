import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:mariok1992@gmail.com">mariok1992@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/mario-konja/">linkedin.com/mario-konja</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/itchioIcon.png")} alt="Github icon" />
          <a href="https://konja.itch.io/">konja.itch.io</a>
        </li>
      </ul>
    </footer>
  );
};
