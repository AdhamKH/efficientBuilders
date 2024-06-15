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
import styles from "./style.module.scss";
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
const ImageUploader = ({
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
          <div className={styles.container}>
            <div className={styles.uploadBox}>
              <input
                type="file"
                id={name}
                className={styles.fileInput}
                onChange={(event: any) => {
                  onChange(event.target.files[0]);
                }}
                onBlur={onBlur}
              />
              <label htmlFor={name} className={styles.uploadLabel}>
                {!value?.name ? (
                  <>
                    <div className={styles.icon}>📤</div>
                    <div>Click to upload</div>
                    <div className={styles.supportedFormats}>
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.icon}>📤</div>
                    <div>Click to change </div>
                    <div>{value?.name}</div>
                  </>
                )}
              </label>
            </div>
          </div>
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
    "& fieldset": {
      borderColor: "black", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "gray", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "black", // Border color when focused
    },
  },
}));
export default ImageUploader;
