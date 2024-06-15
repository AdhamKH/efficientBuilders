import SelectInput from "@/components/inputs/SelectInput/SelectInput";
import { Grid } from "@mui/material";
import React from "react";
import styles from "../firstForm/style.module.scss";
import StanderInput from "@/components/inputs/standerInput";
import RadioButton from "@/components/inputs/radio";
import CheckBox from "@/components/inputs/checkBox";
import ImageUploader from "@/components/inputs/imageUploader";
const data = [{}];
const radioList = [
  { id: 1, title: "Yes" },
  { id: 0, title: "No" },
];

const SecondForm = ({ methods }: any) => {
  const watchSiteSerhvy = methods.watch("is_site_survey");
  const watchSiteDesign = methods.watch("is_site_design");
  console.log("watchSiteSerhvy", watchSiteSerhvy);
  console.log("watchSiteDesign", watchSiteDesign);
  console.log(
    "methods?.formState?.errors?.design_path",
    methods?.formState?.errors
  );
  return (
    <div>
      <Grid container columns={12} spacing={3}>
        {/* <Grid item xs={12}>
          <SelectInput name="service" label="Service" data={data} />
        </Grid> */}
        <Grid item xs={12}>
          <div className={styles.companyInfoContainer}>
            <h2 className={styles.title}>Customer Information </h2>
            <hr className={styles.line} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="customer_name" Label="customer name" />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="customer_address" Label="customer address" />
        </Grid>
        {/* <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="phone" Label=" Phone number" />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <StanderInput name="email" Label="Email" />
        </Grid> */}
        <Grid item xs={12}>
          <CheckBox name="is_hoa" label="Is hoa?" />
        </Grid>
        <Grid item xs={12} md={6}>
          <RadioButton
            list={radioList}
            name="is_site_survey"
            Label="Site survey needed?"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RadioButton
            list={radioList}
            name="is_site_design"
            Label="Design needed?"
          />
        </Grid>
        {watchSiteSerhvy == 1 && (
          <Grid item xs={12}>
            <label className="lable" htmlFor="survey_path">
              upload site survey
            </label>
            <ImageUploader name="survey_path" />
          </Grid>
        )}
        {watchSiteDesign == 1 && (
          <Grid item xs={12}>
            <label className="lable">upload design</label>
            <ImageUploader name="design_path" Label="" />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default SecondForm;
