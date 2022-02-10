import React from "react";
import styles from "../assets/header.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerLogo}>Header Logo</div>
        <ul className={styles.headerNav}>
          <li>header link one</li>
          <li>header link two</li>
          <li>header link three</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
