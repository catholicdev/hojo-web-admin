import { AddCircle, Cached } from "@mui/icons-material";
import { ButtonProps, Grid, Typography } from "@mui/material";

import { PrimaryButton } from "@web/components/shared";

export default function ButtonSystem() {
  const propsBtn: ButtonProps = {
    size: "large",
  };

  return (
    <Grid container spacing={3} columnSpacing={2} alignItems={"center"} padding={5}>
      <Grid xs={12} item>
        <Typography align="center" variant="h4" fontWeight="bold">Button Primary</Typography>
      </Grid>
      <Grid item container xs={12} spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h5" textAlign="center" fontWeight={500}>
            Default
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" textAlign="center" fontWeight={500}>
            Disabled
          </Typography>
        </Grid>
      </Grid>

      <Grid item container xs={6} spacing={3} alignItems="stretch">
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn }}>Default</PrimaryButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn, startIcon: <AddCircle /> }}>Default</PrimaryButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn }}>
            <Cached />
          </PrimaryButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn, variant: "outlined" }}>Default</PrimaryButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn, variant: "outlined", startIcon: <AddCircle /> }}>Default</PrimaryButton>
        </Grid>
      </Grid>

      <Grid item container xs={6} spacing={3} alignItems="stretch">
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn, disabled: true }}>Disabled</PrimaryButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn, disabled: true, startIcon: <AddCircle /> }}>Disabled</PrimaryButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn, disabled: true }}>
            <Cached />
          </PrimaryButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn, disabled: true, variant: "outlined" }}>Disabled</PrimaryButton>
        </Grid>
        <Grid item xs={12} md={3}>
          <PrimaryButton props={{ ...propsBtn, disabled: true, variant: "outlined", startIcon: <AddCircle /> }}>
            Disabled
          </PrimaryButton>
        </Grid>
      </Grid>
    </Grid>
  );
}
