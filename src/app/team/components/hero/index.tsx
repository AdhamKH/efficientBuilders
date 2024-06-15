"use client";
import React from "react";
import styles from "./style.module.scss";
import img from "../../../../assets/team/Image.png";
import Image from "next/image";
const Team = ({ data }: any) => {
  console.log(
    "dataaaaaaaaaassssssssssssssssssssssssssssssssssss",
    data?.data[0]?.teams
  );
  return (
    <div className={styles.teamSection}>
      <h2>Meet Our team</h2>
      <a href="#support" className={styles.supportLink}>
        Speak to someone on our team for support.
      </a>
      <div className={styles.teamGrid}>
        {data?.data[0]?.teams?.map((e: any, i: number) => {
          return (
            <div className={styles.teamMember} key={e?.id}>
              <Image
                src={e?.image_path}
                alt="Brandon Knight"
                width={296}
                height={296}
              />
              <h3>{e?.name}</h3>
              <p>{e?.position}</p>
              <p>{e?.description}</p>
            </div>
          );
        })}
        {/* <div className={styles.teamMember}>
          <Image src={img} alt="Brandon Knight" />
          <h3>Brandon Knight</h3>
          <p>Master Electrician</p>
          <p>
            Brandon brings expert knowledge of solar technologies and electrical
            systems, ensuring all installations meet the highest technical
            standards.
          </p>
        </div>
        <div className={styles.teamMember}>
          <Image src={img} alt="Jay Brazil" />
          <h3>Jay Brazil</h3>
          <p>Operations Manager</p>
          <p>
            Jay oversees the smooth execution of all operations, ensuring each
            solar project progresses without delay and adheres to all regulatory
            requirements.
          </p>
        </div>
        <div className={styles.teamMember}>
          <Image src={img} alt="Ava Nicole" />
          <h3>Ava Nicole</h3>
          <p>Account Manager</p>
          <p>
            Ava keeps our clients closely informed and engaged, providing
            updates and managing expectations to ensure a seamless experience.
          </p>
        </div>
        <div className={styles.teamMember}>
          <Image src={img} alt="Mike Johnson" />
          <h3>Mike Johnson</h3>
          <p>Project Manager</p>
          <p>
            Mike’s expertise in project management ensures that every solar
            installation is meticulously planned, executed, and delivered on
            time and within budget.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Team;
