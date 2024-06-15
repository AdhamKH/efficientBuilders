import { ErrorMessage } from "@hookform/error-message";
import {
  TextField,
  InputLabel,
  FormHelperText,
  Box,
  InputAdornment,
  styled,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { ReactNode } from "react";
import { MyInputLable } from "../label";

type Tinput = {
  name: string;
  control?: any;
  defaultValue?: any;
  value?: any;
  placeholder?: string;
  type?: string;
  Label?: string;
  error?: any;
  required?: boolean;
  isSelect?: boolean;
  children?: any;
  disabled?: boolean;
  startIcon?: ReactNode;
};
const StanderInput = ({
  name,
  defaultValue,
  placeholder,
  type,
  Label,
  required,
  isSelect,
  children,
  disabled,
  startIcon,
}: Tinput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <InputFieldStyle>
      <MyInputLable
        sx={{ color: "#344054" }}
        htmlFor={name}
        required={required}
      >
        {Label}
      </MyInputLable>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomTextField
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            fullWidth
            type={type}
            size="small"
            required={required}
            select={isSelect}
            disabled={disabled}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">{startIcon}</InputAdornment>
            //   ),
            // }}
          >
            {children}
          </CustomTextField>
        )}
      />
      <ErrorMessage
        render={({ message }) => (
          <FormHelperText sx={{ color: "#f00" }}>{message}</FormHelperText>
        )}
        errors={errors}
        name={name}
      />
    </InputFieldStyle>
  );
};

const InputFieldStyle = styled(Box)`
  && {
    /* height: 95px;
    overflow: hidden;
    width: 100%; */
  }
`;

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
export default StanderInput;
