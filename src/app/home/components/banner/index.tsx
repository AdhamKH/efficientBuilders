import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
const Banner = ({ data }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{data?.data[0]?.title}</h1>
        <Link href={`/request-quote`}>
          <button>{data?.data[0]?.button_key}</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
