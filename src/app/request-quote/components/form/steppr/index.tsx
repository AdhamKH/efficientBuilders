import React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import styles from "./style.module.scss";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#DC6803",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#DC6803",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));
const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#DC6803",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#DC6803",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);
function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <svg
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="QontoStepIcon-completedIcon"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.096 0.640159L3.93602 7.55016L2.03602 5.52016C1.68602 5.19016 1.13602 5.17016 0.736015 5.45016C0.346015 5.74016 0.236015 6.25016 0.476015 6.66016L2.72602 10.3202C2.94602 10.6602 3.32601 10.8702 3.75601 10.8702C4.16601 10.8702 4.55602 10.6602 4.77602 10.3202C5.13602 9.85016 12.006 1.66016 12.006 1.66016C12.906 0.740159 11.816 -0.0698405 11.096 0.63016V0.640159Z"
            fill="#DC6803"
          />
        </svg>
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}
const MyStepper = ({ steps, activeStep }: any) => {
  console.log("steps", steps);
  console.log("activeStep", activeStep);
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<QontoConnector />}
      className={styles.container}
    >
      {steps.map((label: any) => (
        <Step key={label}>
          <StepLabel StepIconComponent={QontoStepIcon}>
            <h3 className={label?.id === activeStep ? `${styles.match}` : ""}>
              {label.main}
            </h3>
            <h4 className={label?.id === activeStep ? `${styles.match}` : ""}>
              {" "}
              {label.sub}
            </h4>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default MyStepper;
