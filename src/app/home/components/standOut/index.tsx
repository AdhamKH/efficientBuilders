"use client";
import React from "react";
import styles from "./styles.module.scss";
import SingleStandOutCard from "../singleStandOutCard";

const StandOut = ({ data }: any) => {
  console.log("dataaaaaaaaaaa", data?.data[0]?.services);
  return (
    <div className={styles.container}>
      <div className={styles.border}></div>
      <div className={styles.header}>
        <h1>What we do</h1>
        <h2>What makes us stand out</h2>
      </div>
      <div className={styles.singleCardContainer}>
        {data?.data[0]?.services?.map((e: any, i: number) => {
          return <SingleStandOutCard key={i} single={e} />;
        })}
      </div>
    </div>
  );
};

export default StandOut;
