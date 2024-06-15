"use client";

import { ErrorMessage } from "@hookform/error-message";
import { Box, Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

// import { CheckedIcon, UnCheckedIcon } from "@/components/svg/CheckBox";

type TCheckBox = {
  name: string;
  defaultValue?: any;
  label?: string;
  required?: boolean;
};

const CheckBox = ({ name, label, defaultValue, required }: TCheckBox) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Box width={"100%"}>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  //   icon={
                  //     <svg
                  //       width="13"
                  //       height="11"
                  //       viewBox="0 0 13 11"
                  //       fill="none"
                  //       xmlns="http://www.w3.org/2000/svg"
                  //       className="QontoStepIcon-completedIcon"
                  //     >
                  //       <path
                  //         fill-rule="evenodd"
                  //         clip-rule="evenodd"
                  //         d="M11.096 0.640159L3.93602 7.55016L2.03602 5.52016C1.68602 5.19016 1.13602 5.17016 0.736015 5.45016C0.346015 5.74016 0.236015 6.25016 0.476015 6.66016L2.72602 10.3202C2.94602 10.6602 3.32601 10.8702 3.75601 10.8702C4.16601 10.8702 4.55602 10.6602 4.77602 10.3202C5.13602 9.85016 12.006 1.66016 12.006 1.66016C12.906 0.740159 11.816 -0.0698405 11.096 0.63016V0.640159Z"
                  //         fill="#DC6803"
                  //       />
                  //     </svg>
                  //   }
                  //   checkedIcon={<CheckedIcon />}
                  inputProps={{ "aria-label": "controlled" }}
                  name={name}
                />
              }
              label={label}
            />
          )}
        />
        <ErrorMessage
          render={({ message }) => (
            <FormHelperText
              sx={{ color: "#f00", mt: "-1px", fontSize: 11, fontWeight: 600 }}
            >
              {message}
            </FormHelperText>
          )}
          errors={errors}
          name={name}
        />
      </Box>
    </>
  );
};

export default CheckBox;
