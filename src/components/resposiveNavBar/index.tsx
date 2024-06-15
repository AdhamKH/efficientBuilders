import React from "react";
import styles from "./style.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/path/to/logo.png" alt="Distributed Power Logo" />
        <span>Distributed Power</span>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#license" className={styles.active}>
            License
          </a>
        </li>
        <li>
          <a href="#team">Our team</a>
        </li>
      </ul>
      <div className={styles.quoteButton}>
        <button>Get a Quote</button>
      </div>
    </nav>
  );
};

export default Navbar;
