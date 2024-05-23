import React from "react";

import resumeSvg from "../../assets/resume.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Um <span>Currículo</span> que se destaca!
        </p>
        <p className={styles.heading}>
          Faça seu próprio currículo. <span>É gratis</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
