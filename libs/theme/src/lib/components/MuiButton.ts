import { Components } from "@mui/material";

export default {
  styleOverrides: {
    root: {
      borderRadius: "40px",
      padding: "0.8em 3em",
      boxShadow: "none",
      "&.Mui-disabled": {
        background: "#E0E0E0",
        color: "#C2C2C2",
      },
    },
    contained: {
      ":active": {
        boxShadow: "inset 0px 5px 8px rgba(2, 74, 126, 0.5)",
      },
    },
    containedPrimary: {
      background: `linear-gradient(90deg, var(--mui-palette-primary-light) 0%, var(--mui-palette-primary-dark) 100%)`,
    },
    outlinedPrimary: {
      background: "transparent",
      position: "relative",
      border: "none",
      color: "#0851A4",
      "::before": {
        content: '""',
        inset: 0,
        position: "absolute",
        borderRadius: "inherit",
        padding: "2.1px" /** border size */,

        /** make transparent */
        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "exclude",
        WebkitMaskComposite: "xor",

        /** gradient border color */
        background: `linear-gradient(90deg, var(--mui-palette-primary-light) 0%, var(--mui-palette-primary-dark) 100%)`,
      },
      ":hover": {
        border: "none",
      },
      ":disabled": {
        border: "none",
        color: "#c2c2c2",
        background: "transparent",
        "::before": {
          background: "#c2c2c2" /** gradient border color */,
        },
      },
    },
  },
} as Components["MuiButton"];
