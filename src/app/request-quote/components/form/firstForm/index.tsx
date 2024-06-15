"use client";
import SelectInput from "@/components/inputs/SelectInput/SelectInput";
import { Grid } from "@mui/material";
import React from "react";
import styles from "./style.module.scss";
import StanderInput from "@/components/inputs/standerInput";
const data = [
  {
    id: "1",
    name: "Install and BOS only",
    value: "install_bos",
  },
  {
    id: "2",
    name: "Permit",
    value: "permit",
  },
  {
    id: "3",
    name: "Project Management",
    value: "project_management",
  },
  {
    id: "4",
    name: "All services",
    value: "all_services",
  },
];
const FirstForm = () => {
  return (
    <div>
      <Grid container columns={12} spacing={3}>
        <Grid item xs={12}>
          <SelectInput name="service" label="Service" data={data} />
        </Grid>
        <Grid item xs={12}>
          <div className={styles.companyInfoContainer}>
            <h2 className={styles.title}>Company Information</h2>
            <hr className={styles.line} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="company_name" Label="company" />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="project_manager" Label="project manager" />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="pm_phone" Label="pm phone" />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="pm_email" Label="pm email" type="email" />
        </Grid>
      </Grid>
    </div>
  );
};

export default FirstForm;
