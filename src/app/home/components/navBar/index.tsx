"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
// import logo from "../../../../assets/logo.svg";
import { MailIcon, MailWhiteIcon } from "@/shared/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SlidingPane from "@/components/slidingNavbar";
const NavBar = ({ data }: any) => {
  const pathname: string = usePathname();
  console.log(pathname?.includes("/about"));
  const [show, setShow] = useState<boolean>(false);
  const handleChange = () => {
    setShow(!show);
  };
  console.log("show", show);
  console.log("Testtttttttt", pathname?.includes("/contact-us"));
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <Link href="/">
          <div className={styles.logoContainer}>
            <Image
              src={data?.data[0]?.logo}
              alt="logo"
              className={styles.image}
              // layout="responsive"
              width={42}
              height={42}
            ></Image>
            <h1>{data?.data[0]?.name}</h1>
          </div>
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.list}>
          <ul>
            <li className={pathname?.includes("home") ? styles.active : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname?.includes("/about") ? styles.active : ""}>
              <Link href="/about">About</Link>
            </li>
            <li
              className={pathname?.includes("/projects") ? styles.active : ""}
            >
              <Link href="/projects">projectsAAAAA</Link>
            </li>

            <Link href={"/contact-us"}>
              <li
                className={
                  pathname?.includes("/contact-us") ? styles.active : ""
                }
              >
                Contact
              </li>
            </Link>
            <li className={pathname?.includes("license") ? styles.active : ""}>
              <Link href="/license">License</Link>
            </li>
            <li className={pathname?.includes("team") ? styles.active : ""}>
              <Link href="/team">Our teamsssssss</Link>
            </li>
          </ul>
        </div>
        <div className={styles.btn}>
          <Link href="/request-quote">
            <button>
              <MailWhiteIcon /> Get a Quote
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.smallSrceens}>
        <button onClick={handleChange}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.50003 17.6344V16.1345H20.5V17.6344H3.50003ZM3.50003 12.7498V11.2499H20.5V12.7498H3.50003ZM3.50003 7.86521V6.36523H20.5V7.86521H3.50003Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <SlidingPane open={show} setOpen={setShow} />
    </nav>
  );
};

export default NavBar;
