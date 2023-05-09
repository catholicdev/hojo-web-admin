// ** MUI Imports
// ** Data
import { top100Films } from "@web/@fake-db/autocomplete";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AutocompleteFreeSolo = () => {
  return (
    <Autocomplete
      freeSolo
      sx={{ width: 250 }}
      id="autocomplete-free-solo"
      options={top100Films.map((option) => option.title)}
      renderInput={(params) => <TextField {...params} label="Free Solo" />}
    />
  );
};

export default AutocompleteFreeSolo;
