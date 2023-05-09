import { Close, Search } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

import { IconTextBox, TextBox } from "@web/components/shared";

export default function TextBoxUI() {
  return (
    <Grid container spacing={2} padding={2}>
      <Grid xs={12} item>
        <Typography align="center" fontWeight="bold" variant="h4">
          Text Box
        </Typography>
      </Grid>
      <Grid md={2} xs={6} item>
        <TextBox label="Default" />
      </Grid>
      <Grid md={2} xs={6} item>
        <TextBox label="Password" type="password" />
      </Grid>
      <Grid md={2} xs={6} item>
        <TextBox error label="Name" defaultValue="Error" />
      </Grid>
      <Grid md={2} xs={6} item>
        <IconTextBox placeholder="Search" endIcon={<Search />} rounded />
      </Grid>
      <Grid md={2} xs={6} item>
        <IconTextBox placeholder="Search" startIcon={<Search />} endIcon={<Close />} rounded />
      </Grid>
      <Grid md={2} xs={6} item>
        <IconTextBox
          error
          placeholder="Search"
          defaultValue="Error"
          startIcon={<Search />}
          endIcon={<Close />}
          rounded
        />
      </Grid>
    </Grid>
  );
}
