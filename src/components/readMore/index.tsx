"use client";
import React, { ReactElement, ReactText } from "react";
import styles from "./style.module.scss";
interface Props {
  children: string | React.ReactNode | undefined;
}

const ReadMore: React.FC<Props> = ({ children }) => {
  const text: any = children;
  const [isReadMore, setIsReadMore] = React.useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className={styles.container}>
      <p className="text">
        {isReadMore ? text?.slice(0, 150) : text}
        <span onClick={toggleReadMore} className={styles["read-or-hide"]}>
          {isReadMore ? "...Read more" : " Show less"}
        </span>
      </p>
    </div>
  );
};
export default React.memo(ReadMore);
