import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import img from "../../../../assets/about/Image.png";
const Hero = ({ hero }: any) => {
  console.log("hero", hero[0]);
  return (
    <section className={styles["our-story"]}>
      <div className={styles["content-container"]}>
        <div className={styles["left-column"]}>
          <p className={styles.subtitle}>Our story</p>
          <h1 className={styles.headline}>{hero[0]?.title}</h1>
        </div>
        <div className={styles["right-column"]}>
          {/* <p>
            Distributed Power is a highly skilled and experienced subcontractor
            specializing in the installation of residential and commercial solar
            systems across California. Since its inception in 2010, the company
            has successfully installed thousands of solar solutions, ranging
            from rooftop systems to complex ground mounts. This depth of
            experience underscores Distributed Power's capacity to handle a wide
            array of projects, catering to a diverse clientele including both
            private homeowners and business entities.
          </p>
          <p>
            As a licensed and insured entity, Distributed Power ensures that all
            installations are carried out with the highest standards of
            professionalism and compliance. This legal and financial
            preparedness not only protects the company and its clients but also
            provides an additional layer of trust and reliability—key attributes
            that EPC companies and sales organizations look for in a
            subcontractor.
          </p> */}
          <p>{hero[0]?.description}</p>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={hero[0]?.image_path}
          alt="panels"
          width={1312}
          height={1312}
          layout="responsive"
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
