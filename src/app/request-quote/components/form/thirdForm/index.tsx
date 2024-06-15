import React from "react";
import SelectInput from "@/components/inputs/SelectInput/SelectInput";
import { Grid } from "@mui/material";
import styles from "../firstForm/style.module.scss";
import StanderInput from "@/components/inputs/standerInput";
import RadioButton from "@/components/inputs/radio";
import CheckBox from "@/components/inputs/checkBox";
import ImageUploader from "@/components/inputs/imageUploader";
import TextArea from "@/components/inputs/textArea";
const data = [
  { id: "ground_mount", name: "Ground mount", value: "ground_mount" },
  { id: "roof_mount", name: "Roof mount", value: "roof_mount" },
];
const radioList = [
  { id: 1, title: "Yes" },
  { id: 2, title: "No" },
];
const roofTypes = [
  { id: "shingle", name: "shingle", value: "shingle" },
  { id: "spanish", name: "spanish", value: "spanish" },
  { id: "metal", name: "metal", value: "metal" },
  { id: "concrete", name: "concrete", value: "concrete" },
];
const ThirdForm = ({ methods }: any) => {
  const watchRoofType = methods.watch("installation_type");
  console.log("watchRoofType", watchRoofType);
  return (
    <Grid container columns={12} spacing={3}>
      <Grid item xs={12}>
        <div className={styles.companyInfoContainer}>
          <h2 className={styles.title}>Job Information </h2>
          <hr className={styles.line} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <SelectInput
          name="installation_type"
          label=" Installation Type"
          data={data}
        />
      </Grid>
      {watchRoofType === "roof_mount" && (
        <>
          <Grid item xs={12}>
            <SelectInput
              name="roof_types"
              label="Roof types"
              data={roofTypes}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <StanderInput name="roof_pitch" Label="roof pitch" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <StanderInput name="bird_protectors" Label="bird protectors" />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <StanderInput name="solar_lip" Label="solar lip" />
          </Grid>
        </>
      )}
      {watchRoofType === "ground_mount" && (
        <>
          <Grid item xs={12} md={6} lg={6}>
            <StanderInput name="trench_ft" Label="trenching feet" />
          </Grid>
        </>
      )}
      <Grid item xs={12} md={6} lg={6}>
        <StanderInput name="number_of_panels" Label=" Number of panels" />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <StanderInput name="panel_wattage" Label=" Panel Wattage" />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <StanderInput name="system_size" Label=" System Size (AC)" />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioButton
          list={radioList}
          name="main_service_upgrade"
          Label="Main service upgrade?"
        />
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <RadioButton list={radioList} name="de" Label="DE-Rate" />
      </Grid> */}
      <Grid item xs={12} md={6} lg={6}>
        <StanderInput name="current_mpu" Label="Existing AMP" />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <StanderInput name="new_mpu" Label="New AMP" />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadioButton list={radioList} name="is_battery" Label="Battery ?" />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <StanderInput name="number_of_battaries" Label="Number of Batteries" />
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          list={radioList}
          name="is_ev_charger"
          Label="EV Charger ?"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <StanderInput
          name="number_of_ev_charger"
          Label="number of ev charger"
        />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <StanderInput
          name="number_of_ft_from_service_panel"
          Label="number of ft from service panel"
        />
      </Grid>
      <Grid item xs={12}>
        <TextArea name="notes" label="Other notes:" />
      </Grid>
      <Grid item xs={12}>
        <CheckBox name="check" label="I accept the Terms" />
      </Grid>
    </Grid>
  );
};

export default ThirdForm;
