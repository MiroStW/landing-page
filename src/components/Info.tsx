import React from "react";
import styles from "../assets/info.css";

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <div className={styles.infoHeader}>
          <h2>Some random information.</h2>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoElement}>
            <div className={styles.infoBox}></div>
            <div className={styles.infoText}>
              this is some subtext under an illustration or image
            </div>
          </div>
          <div className={styles.infoElement}>
            <div className={styles.infoBox}></div>
            <div className={styles.infoText}>
              this is some subtext under an illustration or image
            </div>
          </div>
          <div className={styles.infoElement}>
            <div className={styles.infoBox}></div>
            <div className={styles.infoText}>
              this is some subtext under an illustration or image
            </div>
          </div>
          <div className={styles.infoElement}>
            <div className={styles.infoBox}></div>
            <div className={styles.infoText}>
              this is some subtext under an illustration or image
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
