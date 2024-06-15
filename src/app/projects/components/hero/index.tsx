"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import img from "../../../../assets/prrojects/Image.png";
import Image from "next/image";
import { Box, Tooltip } from "@mui/material";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SingleProject from "../singleProject";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const projects = [
  {
    id: 1,
    img: "image1.jpg",
    address: "Address",
    state: "State",
    type: "Roof",
    date: "May-01-2024",
  },
  {
    id: 2,
    img: "image2.jpg",
    address: "Address",
    state: "State",
    type: "Roof",
    date: "May-01-2024",
  },
  {
    id: 3,
    img: "image3.jpg",
    address: "Address",
    state: "State",
    type: "Roof",
    date: "May-01-2024",
  },
  {
    id: 4,
    img: "image4.jpg",
    address: "Address",
    state: "State",
    type: "Roof",
    date: "May-01-2024",
  },
  {
    id: 5,
    img: "image5.jpg",
    address: "Address",
    state: "State",
    type: "Roof",
    date: "May-01-2024",
  },
  {
    id: 6,
    img: "image6.jpg",
    address: "Address",
    state: "State",
    type: "Roof",
    date: "May-01-2024",
  },
  {
    id: 7,
    img: "image7.jpg",
    address: "Address",
    state: "State",
    type: "Roof",
    date: "May-01-2024",
  },
  {
    id: 8,
    img: "image8.jpg",
    address: "Address",
    state: "State",
    type: "Roof",
    date: "May-01-2024",
  },
];
const options: any = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const Projects = ({ data }: any) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [show, setShow] = useState<boolean>(false);
  const handleChange = () => {
    setShow(!show);
  };
  const select = (file: any) => {
    setSelected(file);
    handleOpen();
    handleChange();
  };

  console.log("selected", selected);
  console.log("open", open);
  return (
    <>
      <div className={styles.projectsContainer}>
        <h1>Projects</h1>
        <div className={styles.grid}>
          {data[0]?.projects.map((project: any) => (
            <div key={project.id} className={styles.card}>
              <Image
                src={project?.image_path}
                alt="Project"
                className={styles.image}
                width={244}
                height={133}
              />

              <div className={styles.details}>
                <div className={styles.first}>
                  <p>{project.address}</p>
                  <Tooltip title="More Photos" placement="top">
                    <button
                      className={styles.btn}
                      onClick={() => select(project)}
                    >
                      <svg
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.2 6.5C6.2 6.08579 6.53579 5.75 6.95 5.75C7.36421 5.75 7.7 6.08579 7.7 6.5V10C7.7 10.4142 7.36421 10.75 6.95 10.75C6.53579 10.75 6.2 10.4142 6.2 10V6.5Z"
                          fill="#A1A3A7"
                        />
                        <path
                          d="M7 3.25C7.55228 3.25 8 3.69772 8 4.25C8 4.80228 7.55228 5.25 7 5.25C6.44772 5.25 6 4.80228 6 4.25C6 3.69772 6.44772 3.25 7 3.25Z"
                          fill="#A1A3A7"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14 7.25C14 11.116 10.866 14.25 7 14.25C3.13401 14.25 0 11.116 0 7.25C0 3.38401 3.13401 0.25 7 0.25C10.866 0.25 14 3.38401 14 7.25ZM1.5 7.25C1.5 10.2876 3.96243 12.75 7 12.75C10.0376 12.75 12.5 10.2876 12.5 7.25C12.5 4.21243 10.0376 1.75 7 1.75C3.96243 1.75 1.5 4.21243 1.5 7.25Z"
                          fill="#A1A3A7"
                        />
                      </svg>
                    </button>
                  </Tooltip>
                </div>
                <p>{project.state}</p>
                <div className={styles.last}>
                  {/* <p>{project.type}</p> */}
                  <p>
                    {new Date(project.date)?.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SingleProject data={selected} open={open} setOpen={setOpen} />
    </>
  );
};

export default Projects;
