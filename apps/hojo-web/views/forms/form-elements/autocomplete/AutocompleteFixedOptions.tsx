// ** React Imports
// ** Data
import { top100Films } from "@web/@fake-db/autocomplete";
import { useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
// ** MUI Imports
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

// ** Type
interface DataType {
  year: number;
  title: string;
}

const fixedOptions = [top100Films[6]];

const AutocompleteFixedOptions = () => {
  // ** State
  const [value, setValue] = useState<DataType[]>([...fixedOptions, top100Films[13]]);

  return (
    <Autocomplete
      multiple
      value={value}
      options={top100Films}
      id="autocomplete-fixed-option"
      getOptionLabel={(option) => option.title || ""}
      renderInput={(params) => <TextField {...params} label="Fixed tag" placeholder="Favorites" />}
      onChange={(event, newValue) => {
        setValue([...fixedOptions, ...newValue.filter((option) => fixedOptions.indexOf(option) === -1)]);
      }}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.title}
            {...(getTagProps({ index }) as {})}
            disabled={fixedOptions.indexOf(option) !== -1}
            key={index}
          />
        ))
      }
    />
  );
};

export default AutocompleteFixedOptions;
