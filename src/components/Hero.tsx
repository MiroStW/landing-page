import React from "react";
import styles from "../assets/hero.css";

const Header = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroTeaser}>
          <h1>This website is awesome</h1>
          <p>
            This website has some subtext that goes here under the main title.
            It's a smaller font and the color is lower contrast
          </p>
          <button className={styles.btnPrimary}>Sign up</button>
        </div>
        <div className={styles.heroImage}>
          <img alt="placeholder" src="https://picsum.photos/400/200" />
        </div>
      </div>
    </div>
  );
};

export default Header;
