import { ReactElement } from "react";

import { InputAdornment } from "@mui/material";

import TextBox, { TextBoxProps } from "./TextBox";

type IconTextBoxProps = TextBoxProps & {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

export default function IconTextBox({ startIcon, endIcon, ...props }: IconTextBoxProps) {
  props.InputProps = {
    ...props.InputProps,
    startAdornment: startIcon ? <InputAdornment position="start">{startIcon}</InputAdornment> : null,
    endAdornment: endIcon ? <InputAdornment position="end">{endIcon}</InputAdornment> : null,
  };

  return <TextBox {...props} />;
}
