// ** React Imports
// ** Data
import { top100Films } from "@web/@fake-db/autocomplete";
import { SyntheticEvent, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
// ** MUI Imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface FilmOptionType {
  year: number;
  title: string;
}

const AutocompleteControlledUncontrolled = () => {
  // ** State
  const [value, setValue] = useState<FilmOptionType | null>(null);

  const handleChange = (event: SyntheticEvent, newValue: FilmOptionType | null) => {
    setValue(newValue);
  };

  return (
    <Box className="demo-space-x" sx={{ display: "flex", flexWrap: "wrap" }}>
      <Autocomplete
        value={value}
        sx={{ width: 250 }}
        options={top100Films}
        onChange={handleChange}
        id="autocomplete-controlled"
        getOptionLabel={(option) => option.title || ""}
        renderInput={(params) => <TextField {...params} label="Controlled" />}
      />
      <Autocomplete
        sx={{ width: 250 }}
        options={top100Films}
        id="autocomplete-uncontrolled"
        getOptionLabel={(option) => option.title || ""}
        renderInput={(params) => <TextField {...params} label="Uncontrolled" />}
      />
    </Box>
  );
};

export default AutocompleteControlledUncontrolled;
