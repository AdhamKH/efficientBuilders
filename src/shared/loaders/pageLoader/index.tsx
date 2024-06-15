import React from "react";
import styles from "./style.module.scss";
const PageLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default PageLoader;
