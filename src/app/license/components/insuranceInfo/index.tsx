import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import info from "../../../../assets/license/info.png";
const InsuranceInfo = ({ data }: any) => {
  console.log("dataaaaaaa", data[0]?.licenses[0]?.worker_path);

  return (
    <div className={styles.insuranceInfo}>
      <p>
        As a licensed and insured entity, Distributed Power ensures that all
        installations are carried out with the highest standards of
        professionalism and compliance. This legal and financial preparedness
        not only protects the company and its clients but also provides an
        additional layer of trust and reliability—key attributes that EPC
        companies and sales organizations look for in a subcontractor.
      </p>
      <div className={styles.certificates}>
        <div className={styles.certificate}>
          <h3>Workers Comp</h3>
          <Image
            src={data[0]?.licenses[0]?.worker_path}
            alt="Workers Comp"
            width={550}
            height={700}
          />
        </div>
        <div className={styles.certificate}>
          <h3>Liability Insurance</h3>
          <Image
            src={data[0]?.licenses[0]?.insurance_path}
            alt="Liability Insurance"
            width={550}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default InsuranceInfo;
