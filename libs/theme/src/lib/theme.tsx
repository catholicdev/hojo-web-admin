import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

import { MuiButton, MuiOutlinedInput } from "./components";
import colorSchema from "./colorScheme";

export const theme = extendTheme({
  colorSchemes: {
    dark: colorSchema,
    light: colorSchema,
  },
  components: {
    MuiButton,
    MuiOutlinedInput
  },
  typography: {
    fontFamily: "Quicksand",
  },
});
