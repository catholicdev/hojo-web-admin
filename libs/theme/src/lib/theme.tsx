import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

import { MuiButton } from "./components";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0851A4",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton,
  },
  typography: {
    fontFamily: "Quicksand",
  },
});
