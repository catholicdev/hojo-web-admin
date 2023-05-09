// ** Type Imports
import { Skin } from "@web/@core/layouts/types";

import { OwnerStateThemeType } from "./";

const Autocomplete = (skin: Skin) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: ({ theme }: OwnerStateThemeType) => ({
          ...(skin === "bordered" && { boxShadow: "none", border: `1px solid ${theme.palette.divider}` }),
        }),
      },
    },
  };
};

export default Autocomplete;
