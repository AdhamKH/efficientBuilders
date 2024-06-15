import { Controller, useFormContext } from "react-hook-form";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base";
// import { MyInputLable, StadardSelect } from "../standardSelect";
import { FormHelperText, MenuItem, styled } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import { MyInputLable } from "../label";

interface InputProps {
  label: string;
  defaultValue?: string | number;
  name: string;
  required?: boolean;
  placeholder?: string;
  data: any;
  valueName?: boolean;
}

const SelectInput = ({
  defaultValue,
  label,
  name,
  required,
  placeholder,
  data,
  valueName,
}: InputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<any>();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue ? defaultValue : ""}
      render={({ field: { onChange, value } }) => (
        <div className={"mb-10"}>
          <MyInputLable htmlFor={name} required={required}>
            {label}
          </MyInputLable>
          <div className="mt-3">
            <StadardSelect
              fullWidth
              size="small"
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              id={name}
            >
              {data?.map((item: any) => (
                <MenuItem key={item.id} value={valueName ? item.name : item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </StadardSelect>
            <ErrorMessage
              render={({ message }) => (
                <FormHelperText sx={{ color: "#f00" }}>
                  {message}
                </FormHelperText>
              )}
              errors={errors}
              name={name}
            />
          </div>
        </div>
      )}
    />
  );
};
const StadardSelect = styled(Select)`
  && {
    background-color: white;
    // Background color
    .MuiSelect-select {
      /* border-radius: 0.6rem; */
      max-width: 100%;
      border: 1px solid #000000;
    }
    &.MuiInputBase-root {
      /* border-radius: 0.6rem; */
      max-width: 100%;
    }
    &:focus {
      background-color: red;
    }
  }
`;

export default SelectInput;
