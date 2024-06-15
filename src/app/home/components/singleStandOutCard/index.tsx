"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import img from "../../../../assets/solar-panels.png";
import solarIcon from "../../../../assets/icon-solar.png";
import ReadMore from "@/components/readMore";
const SingleStandOutCard = ({ single }: any) => {
  console.log("single", single);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.singleDiv}>
          <div className={styles.first}>
            <Image
              src={single?.image_path}
              alt="solar"
              width={400}
              height={268.24}
              objectFit="contain"
              // style={{ maxWidth: "100%", height: "auto" }}
              layout="responsive"
            ></Image>
            <Image
              src={single?.icon_path}
              alt="solar"
              className={styles.icon}
              width={60}
              height={60}
            ></Image>
          </div>
          <div className={styles.second}>
            <div className={styles.header}>
              <h1>{single?.title}</h1>
              <div className={styles.border}></div>
            </div>
            <div>
              <ReadMore>{single?.description}</ReadMore>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStandOutCard;
