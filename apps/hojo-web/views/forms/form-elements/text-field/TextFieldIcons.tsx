// ** MUI Imports
// ** Icon Imports
import Icon from "@web/@core/components/icon";

import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

const TextFieldIcons = () => {
  return (
    <form className="demo-space-x" noValidate autoComplete="off">
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Icon icon="mdi:account-circle-outline" />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        label="TextField"
        variant="standard"
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon icon="mdi:account-circle-outline" />
            </InputAdornment>
          ),
        }}
      />
      <div>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item sx={{ "& svg": { color: "action.active" } }}>
            <Icon icon="mdi:account-circle-outline" />
          </Grid>
          <Grid item>
            <TextField variant="standard" id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
    </form>
  );
};

export default TextFieldIcons;
