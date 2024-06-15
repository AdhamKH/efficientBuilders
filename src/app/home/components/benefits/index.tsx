"use client";
import React from "react";
import styles from "./style.module.scss";
import { SunIcon } from "@/shared/icons";
import Image from "next/image";
import bg from "../../../../assets/main-bgCropped.jpg";
const Benefits = ({ data }: any) => {
  let benefits = data?.data[0]?.whies[0];
  console.log("benefits", benefits);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.contnet}>
          <div className={styles.border}></div>
          <h1>OUR BENEFITS</h1>
          <h2>{benefits?.title}</h2>
          <h3>{benefits?.description}</h3>
          {/* <ul>
            <li>
              <SunIcon /> Suspe ndisse suscipit sagittis leo.
            </li>
            <li>
              <SunIcon /> Suspe ndisse suscipit sagittis leo.
            </li>
            <li>
              <SunIcon /> Suspe ndisse suscipit sagittis leo.
            </li>
          </ul> */}
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src={data?.data[0]?.whies[0]?.image_path}
          alt="background"
          height={500}
          width={700}
        ></Image>
      </div>
    </div>
  );
};

export default Benefits;
