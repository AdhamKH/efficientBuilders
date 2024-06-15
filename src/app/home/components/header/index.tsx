import React from "react";
import styles from "./style.module.scss";
import {
  FaceBookIcon,
  InstgramIcon,
  PhoneIcon,
  XIcon,
  YoutubeIcon,
} from "@/shared/icons";
const Header = ({ data }: any) => {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <ul>
          <li>
            <FaceBookIcon />
          </li>
          <li>
            <XIcon />
          </li>
          <li>
            <YoutubeIcon />
          </li>
          <li>
            <InstgramIcon />
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <div>
          <PhoneIcon />
          {data?.data[0]?.phone}
        </div>
        <div>
          <ul>
            <li>Careers</li>
            <li>News & Media</li>
            <li></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
