import React from "react";
import styles from "../assets/CTA.css";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaBox}>
        <div className={styles.ctaText}>
          <h3>Call to action! It's time!</h3>
          <p>
            Sign up for our product by clicking that button right over there.
          </p>
        </div>
        <button className={styles.ctaBtn}>Sign up</button>
      </div>
    </div>
  );
};

export default CTA;
