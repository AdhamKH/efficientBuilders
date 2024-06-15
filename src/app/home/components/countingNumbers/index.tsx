"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import background from "../../../../assets/backgroundNUmbers.jpg";
import circleIcon from "../../../../assets/circle-icon-1.png";
const CountingNumbers = ({ data }: any) => {
  console.log("datadata", data?.data[0]?.facts);
  return (
    <div className={styles.container}>
      <div className={styles["grid-container"]}>
        <Image
          src={background}
          fill
          objectFit="cover"
          objectPosition="center"
          style={{ zIndex: "-1" }}
          alt="solar"
        ></Image>
        {data?.data[0]?.facts?.map((e: any) => {
          return (
            <div className={styles["grid-item"]} key={e?.id}>
              <h1>{e?.title}</h1>
              <Image
                src={e?.icon_path}
                alt="icon"
                className={styles.icon}
                width={50}
                height={50}
              ></Image>
              <p>{e?.subtitle}</p>
            </div>
          );
        })}
        {/* <div className={styles["grid-item"]}>
          <h1>10+</h1>
          <Image src={circleIcon} alt="icon" className={styles.icon}></Image>
          <p>MW installed</p>
        </div>
        <div className={styles["grid-item"]}>
          <h1>84k</h1>
          <Image src={circleIcon} alt="icon" className={styles.icon}></Image>
          <p>MW installed</p>
        </div>
        <div className={styles["grid-item"]}>
          <h1>I14</h1>
          <Image src={circleIcon} alt="icon" className={styles.icon}></Image>
          <p>MW installed</p>
        </div>
        <div className={styles["grid-item"]}>
          <h1>5</h1>
          <Image src={circleIcon} alt="icon" className={styles.icon}></Image>
          <p>MW installed</p>
        </div> */}
      </div>
    </div>
  );
};

export default CountingNumbers;
