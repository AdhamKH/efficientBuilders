"use client";
import React, { useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import img from "../../../../assets/installtion.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const Installation = ({ data }: any) => {
  console.log("datasssssssssssssss", data?.data);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className={styles.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Pagination, Navigation]} // onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.data?.map((e: any) => {
          return (
            <SwiperSlide>
              <section className={styles.container}>
                <Image
                  src={e?.image_path}
                  alt="background"
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  style={{ zIndex: "-1" }}
                ></Image>
                <div className={styles.content}>
                  <h1>{e?.subtitle}</h1>
                  <div>
                    <h2>{e?.headline_one}</h2>
                    <h3>{e?.headline_two}</h3>
                  </div>

                  <Link href="/about">
                    <button>{e?.button_key}</button>
                  </Link>
                </div>
                <div className={styles.lastDiv}>
                  <h4>{e?.headline_three}</h4>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
        <div className={styles.customNavigation}>
          <button ref={prevRef} className={styles.customPrevButton}>
            <svg
              // fill="#f6a235"
              height="30px"
              width="30px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384.97 384.97"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g id="Chevron_Left_Circle">
                    {" "}
                    <path d="M192.485,0C86.185,0,0,86.185,0,192.485C0,298.797,86.173,384.97,192.485,384.97S384.97,298.797,384.97,192.485 C384.97,86.185,298.797,0,192.485,0z M192.485,361.282c-92.874,0-168.424-75.923-168.424-168.797S99.611,24.061,192.485,24.061 s168.424,75.55,168.424,168.424S285.359,361.282,192.485,361.282z"></path>{" "}
                    <path d="M235.878,99.876c-4.704-4.74-12.319-4.74-17.011,0l-83.009,84.2c-4.572,4.62-4.584,12.56,0,17.191l82.997,84.2 c4.704,4.74,12.319,4.74,17.011,0c4.704-4.752,4.704-12.439,0-17.191l-74.528-75.61l74.54-75.61 C240.57,112.315,240.57,104.628,235.878,99.876z"></path>{" "}
                  </g>{" "}
                  <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
          <button ref={nextRef} className={styles.customNextButton}>
            <svg
              // fill="#f6a235"
              height="30px"
              width="30px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384.97 384.97"
              className="convert"
              style={{ transform: "rotate(180deg)" }}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g id="Chevron_Left_Circle">
                    {" "}
                    <path d="M192.485,0C86.185,0,0,86.185,0,192.485C0,298.797,86.173,384.97,192.485,384.97S384.97,298.797,384.97,192.485 C384.97,86.185,298.797,0,192.485,0z M192.485,361.282c-92.874,0-168.424-75.923-168.424-168.797S99.611,24.061,192.485,24.061 s168.424,75.55,168.424,168.424S285.359,361.282,192.485,361.282z"></path>{" "}
                    <path d="M235.878,99.876c-4.704-4.74-12.319-4.74-17.011,0l-83.009,84.2c-4.572,4.62-4.584,12.56,0,17.191l82.997,84.2 c4.704,4.74,12.319,4.74,17.011,0c4.704-4.752,4.704-12.439,0-17.191l-74.528-75.61l74.54-75.61 C240.57,112.315,240.57,104.628,235.878,99.876z"></path>{" "}
                  </g>{" "}
                  <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
      </Swiper>
    </section>
  );
};

export default Installation;
