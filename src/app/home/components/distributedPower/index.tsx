"use client";
import React from "react";
import styles from "./style.module.scss";
import img from "../../../../assets/jhonney.jpg";
import Image from "next/image";

const DistributedPower = ({ data }: any) => {
  const single = data?.data[0]?.intros[0];
  console.log("single", single);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={single?.image_path}
          alt="solar"
          width={"545"}
          height={"545"}
        ></Image>
        <div className={styles.box}>
          <h1>
            {single?.warranty}
            <sup>+</sup>
          </h1>
          <div>
            <p>years</p>
            <p>warranty</p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.border}></div>
        <div className={styles.content}>
          <h1>{single?.title}</h1>
          <p>{single?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DistributedPower;
