"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import FirstForm from "./firstForm";
import SecondForm from "./secondForm";
import ThirdForm from "./thirdForm";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import MyStepper from "./steppr";
import { companyId, mainUrl } from "@/app/lib";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
const steps = [
  {
    id: 0,
    main: "Company Information",
    sub: "Please provide your name and email",
  },
  {
    id: 1,
    main: "Customer Information ",
    sub: "A few details about your company",
  },
  {
    id: 2,
    main: "Job Information ",
    sub: "Start collaborating with your team",
  },
];
const SUPPORTED_FORMATS = [
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webP ",
  "video/webm",
  "video/mp4",
  "image/svg",
  "video/x-ms-wmv",
  "video/wmv",
  "image/svg+xml",
];
const schema = yup.object({
  service: yup.string().required("service is required"),
  company_name: yup.string().required("company name is required"),
  project_manager: yup.string().required("project_manager is required"),
  pm_phone: yup.string().required("pm_phone is required"),
  pm_email: yup
    .string()
    .required("pm_email is required")
    .email("Enter a valid email"),
  customer_name: yup.string().required("customer name is required"),
  customer_address: yup.string().required("customer address is required"),
  is_hoa: yup.string().required("is hoa is required"),
  is_site_survey: yup.string().required("is site survey is required"),
  survey_path: yup.string().when("is_site_survey", {
    is: 1,
    then: (schema) => schema.required("survey image is required"),
  }),
  is_site_design: yup.string().required("is site design is required"),
  design_path: yup.string().when("is_site_survey", {
    is: 1,
    then: (schema) => schema.required("design image is required"),
  }),
  installation_type: yup.string().required("installation type is required"),
  roof_types: yup.string().required("roof types is required"),
});
const validationSchema: any = [
  //validation for step1
  yup.object({
    service: yup.string().required("service is required"),
    company_name: yup.string().required("company name is required"),
    project_manager: yup.string().required("project_manager is required"),
    pm_phone: yup.string().required("pm_phone is required"),
    pm_email: yup
      .string()
      .required("pm_email is required")
      .email("Enter a valid email"),
  }),
  //validation for step2
  yup.object({
    customer_name: yup.string().required("customer name is required"),
    customer_address: yup.string().required("customer address is required"),
    is_hoa: yup.string().required("is hoa is required"),
    is_site_survey: yup.string().required("is site survey is required"),
    survey_path: yup.string().when("is_site_survey", {
      is: "1",
      then: (schema) => schema.required("survey image is required"),
    }),
    is_site_design: yup.string().required("is site design is required"),
    design_path: yup.string().when("is_site_design", {
      is: "1",
      then: (schema) => schema.required("design image is required"),
    }),
  }),
  //validation for step3
  yup.object({
    installation_type: yup.string().required("installation type is required"),
    roof_types: yup.string().when("installation_type", {
      is: "roof_mount",
      then: (schema) => schema.required("roof_types is required"),
    }),
    roof_pitch: yup.string().when("installation_type", {
      is: "roof_mount",
      then: (schema) => schema.required("roof_pitch is required"),
    }),
    bird_protectors: yup.string().when("installation_type", {
      is: "roof_mount",
      then: (schema) => schema.required("bird_protectors is required"),
    }),
    solar_lip: yup.string().when("installation_type", {
      is: "roof_mount",
      then: (schema) => schema.required("solar_lip is required"),
    }),
    trench_ft: yup.string().when("installation_type", {
      is: "ground_mount",
      then: (schema) => schema.required("trench_ft is required"),
    }),
    number_of_panels: yup.string().required("number of panels is required"),

    panel_wattage: yup.string().required("panel wattage is required"),

    system_size: yup.string().required("system size is required"),

    main_service_upgrade: yup
      .string()
      .required("main service upgrade is required"),

    check: yup.string().required("check is required"),
    notes: yup.string().required("notes is required"),
    new_mpu: yup.string().required("new_mpu is required"),
    current_mpu: yup.string().required("current_mpu is required"),
    is_battery: yup.string().required("is_battery is required"),
    number_of_battaries: yup
      .string()
      .required("number_of_battaries is required"),
    is_ev_charger: yup.string().required("is_ev_charger is required"),
    number_of_ev_charger: yup
      .string()
      .required("number_of_ev_charger is required"),
    number_of_ft_from_service_panel: yup
      .string()
      .required("number_of_ft_from_service_panel is required"),
  }),
];
const FormContainer = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLoading, setLoading] = useState(false);

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const currentValidationSchema = validationSchema[activeStep];

  const methods: any = useForm<any>({
    resolver: yupResolver(currentValidationSchema),
    shouldUnregister: false,
    mode: "onChange",
  });
  const { handleSubmit, reset, trigger } = methods;
  console.log("Errs", methods?.formState?.errors);
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log("data", data);
    const formData = new FormData();
    for (const property in data) {
      formData.append(`${property}`, data[property]);
    }
    formData.append(`company_id`, companyId);

    setLoading(true);
    let sendData = {
      ...formData,
      company_id: "3",
    };

    // fetch(`${mainUrl}/submits`, {
    //   method: "POST",
    //   // headers: {
    //   //   "Content-Type": "application/json",
    //   // },
    //   body: JSON.stringify(sendData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //     toast.success("Success");
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     setLoading(false);
    //   });
    axios({
      method: "post",
      url: `${mainUrl}/submits`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        toast.success("Success");
        setLoading(false);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
        toast.success("Error");
        setLoading(false);
      });
  };
  const currentForm = () => {
    switch (activeStep) {
      case 0:
        return <FirstForm />;
        break;
      case 1:
        return <SecondForm methods={methods} />;
        break;
      case 2:
        return <ThirdForm methods={methods} />;
        break;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <h1>Submit a job</h1>
        <p>Simplifying your installations</p>
      </div>
      <Box sx={{ width: "100%" }}>
        {/* <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label?.id}>
              <StepLabel>
                <h3>{label.main}</h3>
                <h4>{label.sub}</h4>
              </StepLabel>
            </Step>
          ))}
        </Stepper> */}
        <MyStepper steps={steps} activeStep={activeStep} />
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <>
              {currentForm()}
              <div className={styles.btns}>
                <button onClick={handleBack} disabled={activeStep === 0}>
                  Back
                </button>
                {activeStep === 2 ? (
                  <>
                    <button type="submit">
                      {isLoading ? "Submiting" : "Submit"}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleNext}
                      // disabled={activeStep === 2}
                      type={"button"}
                    >
                      Next
                    </button>
                  </>
                )}
              </div>
            </>
          </form>
        </FormProvider>
      </Box>
    </div>
  );
};

export default FormContainer;
