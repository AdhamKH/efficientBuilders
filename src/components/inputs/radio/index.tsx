"use client";
import { ErrorMessage } from "@hookform/error-message";
import {
  Box,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TRadio = {
  name: string;
  defaultValue?: any;
  Label?: string;
  required?: boolean;
  list: any[];
};

const RadioButton = ({ name, Label, defaultValue, required, list }: TRadio) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box width={"100%"} height={88}>
      <InputLabel
        sx={{
          color: "var(--darkGray)",
          fontSize: 14,
          mb: 0.5,
          fontWeight: "700",
        }}
        htmlFor={name}
        required={required}
      >
        {Label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            row
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            defaultChecked={defaultValue}
          >
            {list.map((item: any) => (
              <FormControlLabel
                key={item.id}
                value={item?.id}
                control={<CustomTextField />}
                label={item.title}
              />
            ))}
          </RadioGroup>
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
  );
};
const CustomTextField = styled(Radio)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& .Mui-checked": {
      borderColor: "black", // Default border color
      background: "#1976d2",
    },
    "&:hover fieldset": {
      borderColor: "gray", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "black", // Border color when focused
    },
    ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
      color: "red",
    },
  },
}));
export default RadioButton;
