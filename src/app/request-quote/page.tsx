import React from "react";
import FormContainer from "./components/form";
import styles from "./style.module.scss";
const page = () => {
  return (
    <div className={styles.container}>
      <FormContainer />
    </div>
  );
};

export default page;
