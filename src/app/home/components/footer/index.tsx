import React from "react";
import styles from "./style.module.scss";
import Banner from "../banner";
import { Grid } from "@mui/material";
import img from "../../../../assets/logo-light.png";
import Image from "next/image";
import {
  FaceBookIcon,
  FaceBookWhiteIcon,
  InstWhiteIcon,
  InstgramIcon,
  MailIcon,
  PhoneIcon,
  SunIcon,
  XIcon,
  XWhiteIcon,
  YoutubeIcon,
  YoutubeWhiteIcon,
} from "@/shared/icons";
import Link from "next/link";
const Footer = ({ data }: any) => {
  const [street, ...rest] = data?.data[0]?.address.split(", ");

  return (
    <footer className={styles.container}>
      <div className={styles.banner}>
        <Banner data={data} />
      </div>

      <div className={styles["footer-container"]}>
        <div className={styles["footer-column"]}>
          <div className={styles.logoContainer}>
            <Image
              src={data?.data[0]?.logo}
              alt="logo"
              className={styles.image}
              // layout="responsive"
              width={68}
              height={68}
            ></Image>
            <div>
              <h1>{data?.data[0]?.name}</h1>
              <p>{data?.data[0]?.slogan}</p>
            </div>
          </div>
          <p className={styles.icon}>
            <MailIcon />
            <a href="mailto:needhelp@company.com">{data?.data[0]?.email}</a>
          </p>
          <p className={styles.icon}>
            <PhoneIcon />
            <a href="tel:+1234567890">{data?.data[0]?.phone}</a>
          </p>
        </div>
        <div className={styles["footer-column"]}>
          <h3>Explore</h3>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team">Leadership Team</Link>
            </li>
            {/* <li>
              <Link href="/services">Our Services</Link>
            </li> */}
            <li>
              <Link href="/projects">Recent Projects</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer-column"]}>
          <h3>Services</h3>
          <ul>
            <li>Installation only</li>
            <li>Permit and Installation</li>
            <li>Interconnection only</li>
            <li>Full package</li>
          </ul>
        </div>
        {/* <div className={styles["footer-column"]}>
          <h3>Contact</h3>
          <address>
            {street},<br />
            {rest.join(", ")}
          </address>
          <br />
          <div className={styles["social-icons"]}>
            <a href="">
              <FaceBookWhiteIcon />
            </a>
            <a href="">
              <XWhiteIcon />
            </a>
            <a href="">
              <YoutubeWhiteIcon />
            </a>
            <a href="">
              <InstWhiteIcon />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
