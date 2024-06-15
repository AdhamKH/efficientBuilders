import React from "react";
import styles from "./style.module.scss";
import solarProject from "../../../../assets/solarProject.png";
import Image from "next/image";
const OurProjects = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.border}></div>

          <h1>Our Projects</h1>
        </div>
        <div className={styles.second}>
          <div className={styles.imgs}>
            <div>
              <Image src={solarProject} alt="project"></Image>
            </div>
            <div>
              <Image src={solarProject} alt="project"></Image>
            </div>
            <div>
              <Image src={solarProject} alt="project"></Image>
            </div>
            <div>
              <Image src={solarProject} alt="project"></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
