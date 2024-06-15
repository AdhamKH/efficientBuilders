"use client";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import useInViewAnimation from "@/animation/useScroll";
import useInViewAnimationRepeat from "@/animation/useScrollRepeat";
import { useRouter } from "next/navigation";
type props = {
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
};

export const navList = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
};
export const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};
const SlidingPane: React.FC<props> = ({ open, setOpen, data }: props) => {
  const pathname = usePathname();
  const { push } = useRouter();

  const [openSingIn, setOpenSingIn] = React.useState<boolean>(false);
  const handlChange = () => {
    setOpenSingIn(!openSingIn);
  };
  const [openForm, setOpenForm] = React.useState<boolean>(false);
  const handleChangeForm = () => {
    setOpenForm(!openForm);
  };

  const [openOptions, setOpenOptions] = React.useState<boolean>(false);
  const { ref, controls } = useInViewAnimationRepeat();
  const handlClose = () => {
    setOpen?.(false);
    console.log("clicked");
  };

  React.useLayoutEffect(() => {
    if (pathname) handlClose();
  }, [pathname]);

  const [openAccordtion, setOpenAccordition] = React.useState<boolean>(false);
  const [openAccordtionSecond, setOpenAccorditionSecond] =
    React.useState<boolean>(false);
  const [openAccordtionThird, setOpenAccorditionThird] =
    React.useState<boolean>(false);
  const hanldeChange = () => {
    return setOpenAccordition(!openAccordtion);
  };
  const hanldeChangeSecond = () => {
    return setOpenAccorditionSecond(!openAccordtionSecond);
  };
  const hanldeChangeThird = () => {
    return setOpenAccorditionThird(!openAccordtionThird);
  };

  // console.log("isLogged", isLogged);
  return (
    <>
      <div
        className={
          open
            ? `${styles.slidignOutterContainer}  ${styles.show}`
            : `${styles.slidignOutterContainer} `
        }
      >
        <div className={styles.heading}>
          <ul>
            <li className={styles.liFont}>
              <div className={styles.header}>
                <span className={styles.text}>Our projects</span>
              </div>
            </li>
            <li className={styles.liFont}>
              <button onClick={handlClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                    fill="black"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.Sliding_content}>
          <div className={styles.gridContainer}>
            {data?.project_images?.map((img: any, index: number) => (
              <Image
                key={index}
                src={img?.image_path}
                alt={`Project ${index + 1}`}
                className={styles.projectImage}
                width={176}
                height={155}
              />
            ))}
          </div>
        </div>
      </div>

      <div></div>
      {/* <Login open={openForm} setOpen={setOpenForm}></Login> */}
    </>
  );
};

export default SlidingPane;
