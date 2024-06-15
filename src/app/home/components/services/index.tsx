"use client";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import icon from "../../../../assets/sunIcon.png";
const Services = ({ data }: any) => {
  console.log("datadatadata", data?.data[0]?.values);
  return (
    <div className={styles.container}>
      <div className={styles.border}></div>
      <h1>Ecological Way</h1>
      <div className={styles.contentContainer}>
        {data?.data[0]?.values?.map((e: any) => {
          return (
            <div className={styles.single} key={e?.id}>
              <Image
                src={e?.icon_path}
                alt="icon"
                width={50}
                height={57.1}
              ></Image>
              <h1>{e?.title}</h1>
              <h2>{e?.subtitle}</h2>
            </div>
          );
        })}
        {/* <div className={styles.single}>
          <Image src={icon} alt="icon"></Image>
          <h1>Exceptional Workmanship and Cleanliness</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className={styles.single}>
          <Image src={icon} alt="icon"></Image>
          <h1>Exceptional Workmanship and Cleanliness</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className={styles.single}>
          <Image src={icon} alt="icon"></Image>
          <h1>Exceptional Workmanship and Cleanliness</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className={styles.single}>
          <Image src={icon} alt="icon"></Image>
          <h1>Exceptional Workmanship and Cleanliness</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className={styles.single}>
          <Image src={icon} alt="icon"></Image>
          <h1>Exceptional Workmanship and Cleanliness</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className={styles.single}>
          <Image src={icon} alt="icon"></Image>
          <h1>Exceptional Workmanship and Cleanliness</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className={styles.single}>
          <Image src={icon} alt="icon"></Image>
          <h1>Exceptional Workmanship and Cleanliness</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div>
        <div className={styles.single}>
          <Image src={icon} alt="icon"></Image>
          <h1>Exceptional Workmanship and Cleanliness</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
