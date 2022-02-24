import React, { ChangeEventHandler } from "react";
import Box from "@mui/material/Box";
import { TextField as MuiTextField } from "@mui/material";

interface TextFieldProps {
  label: string;
  value?: string;
  name: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  multiline?: boolean;
  rows?: number;
}

function TextField({
  name,
  value,
  label,
  type,
  onChange,
  multiline,
  rows,
}: TextFieldProps): JSX.Element {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <MuiTextField
        name={name}
        defaultValue={value}
        label={label}
        type={type}
        variant="outlined"
        multiline={multiline}
        rows={rows}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
}

export default TextField;

TextField.defaultProps = {
  value: "",
  multiline: false,
  rows: 5,
};
