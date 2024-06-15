"use client";

import { ErrorMessage } from "@hookform/error-message";
import {
  Box,
  FormHelperText,
  InputLabel,
  TextField,
  TextFieldProps,
  styled,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  defaultValue?: any;
  placeholder?: string;
  label?: string;
  required?: boolean;
};

const TextArea = ({
  name,
  defaultValue,
  placeholder,
  label,
  required,
  ...props
}: TextAreaProps & TextFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field }) => (
        <Box>
          {label && (
            <InputLabel
              sx={{
                // color: colors.black[600],
                fontSize: 14,
                mb: 0.5,
                fontWeight: "700",
              }}
              htmlFor={name}
              required={required}
            >
              {label}
            </InputLabel>
          )}
          <CustomTextField
            {...props}
            {...field}
            placeholder={placeholder}
            fullWidth
            type="text"
            multiline
            error={errors[name] ? true : false}
            rows={5}
          />
          <ErrorMessage
            render={({ message }) => (
              <FormHelperText
                sx={{
                  // color: colors.error[500],
                  fontSize: 12,
                }}
              >
                {message}
              </FormHelperText>
            )}
            errors={errors}
            name={name}
          />
        </Box>
      )}
    />
  );
};
const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white", // Background color

    "& fieldset": {
      borderColor: "black", // Default border color
      border: "1px solid #000000",
    },
    "&:hover fieldset": {
      borderColor: "gray", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "black", // Border color when focused
    },
  },
}));

export default TextArea;
