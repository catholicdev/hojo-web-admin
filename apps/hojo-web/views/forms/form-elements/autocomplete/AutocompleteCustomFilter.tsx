// ** MUI Imports
// ** Data
import { top100Films } from "@web/@fake-db/autocomplete";

import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface FilmOptionType {
  year: number;
  title: string;
}

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option: FilmOptionType) => option.title,
});

const AutocompleteCustomFilter = () => {
  return (
    <Autocomplete
      options={top100Films}
      filterOptions={filterOptions}
      id="autocomplete-custom-filter"
      getOptionLabel={(option) => option.title || ""}
      renderInput={(params) => <TextField {...params} label="Custom filter" />}
    />
  );
};

export default AutocompleteCustomFilter;
