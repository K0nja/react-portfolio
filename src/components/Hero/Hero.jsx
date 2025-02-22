import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>It's a me, Mario!</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 10 years of experience. I have tons of backend experince as well as a hobby in game development. Reach out if you'd like to learn more!
        </p>
        <p></p>
        <p className={styles.description}>You can find my full resume <b><a href="https://drive.google.com/file/d/1oFyuQyALrBNelPq-VV4Kf8pcKh9bi8BB/view?usp=sharing">here</a></b></p>
        <a href="mailto:mariok1992@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
