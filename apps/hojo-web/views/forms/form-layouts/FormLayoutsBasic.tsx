// ** React Imports
// ** Next Import
import Link from "next/link";

// ** Icon Imports
import Icon from "@web/@core/components/icon";
import { ChangeEvent, useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

interface State {
  password: string;
  showPassword: boolean;
}

const FormLayoutsBasic = () => {
  // ** States
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });
  const [confirmPassValues, setConfirmPassValues] = useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleConfirmPassChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword });
  };

  return (
    <Card>
      <CardHeader title="Basic" />
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" placeholder="Leonard Carter" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                placeholder="carterleonard@gmail.com"
                helperText="You can use letters, numbers & periods"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="form-layouts-basic-password">Password</InputLabel>
                <OutlinedInput
                  label="Password"
                  value={values.password}
                  id="form-layouts-basic-password"
                  onChange={handleChange("password")}
                  type={values.showPassword ? "text" : "password"}
                  aria-describedby="form-layouts-basic-password-helper"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label="toggle password visibility">
                        <Icon icon={values.showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="form-layouts-basic-password-helper">
                  Use 8 or more characters with a mix of letters, numbers & symbols
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="form-layouts-confirm-password">Confirm Password</InputLabel>
                <OutlinedInput
                  label="Confirm Password"
                  value={confirmPassValues.password}
                  id="form-layouts-confirm-password"
                  onChange={handleConfirmPassChange("password")}
                  aria-describedby="form-layouts-confirm-password-helper"
                  type={confirmPassValues.showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={handleClickConfirmPassShow}
                        onMouseDown={(e) => e.preventDefault()}
                        aria-label="toggle password visibility">
                        <Icon icon={confirmPassValues.showPassword ? "mdi:eye-outline" : "mdi:eye-off-outline"} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id="form-layouts-confirm-password-helper">
                  Make sure to type the same password as above
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <Button type="submit" variant="contained" size="large">
                  Get Started!
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& a": { color: "primary.main", textDecoration: "none" },
                  }}>
                  <Typography sx={{ mr: 2 }}>Already have an account?</Typography>
                  <Link href="/" onClick={(e) => e.preventDefault()}>
                    Log in
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormLayoutsBasic;
