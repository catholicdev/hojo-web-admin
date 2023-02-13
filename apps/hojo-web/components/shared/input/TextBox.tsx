import { TextField, TextFieldProps } from "@mui/material";

export type TextBoxProps = TextFieldProps & {
  rounded?: boolean | string;
};

export default function TextBox({ rounded = false, ...props }: TextBoxProps) {
  if (rounded)
    props.InputProps.style = {
      ...props.InputProps.style,
      borderRadius: "40px",
    };

  return <TextField {...props} fullWidth />;
}
