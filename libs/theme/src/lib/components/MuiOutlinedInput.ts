import { Components } from "@mui/material";

export default {
  styleOverrides: {
    root: {
      borderRadius: "16px",
      "&.Mui-error": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: `var(--mui-palette-error-main) !important`,
        },
        "& .MuiInputAdornment-root": {
          color: `var(--mui-palette-error-main)`,
        },
      },
    },
    notchedOutline: {
      borderColor: `var(--mui-palette-primary-main) !important`,
    },
  },
} as Components["MuiOutlinedInput"];
