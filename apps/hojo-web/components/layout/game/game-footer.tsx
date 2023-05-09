import { ReactComponent as Gold } from "@web/public/images/gold.svg";
import React from "react";

import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Avatar, Grid, Typography } from "@mui/material";

type FooterType = {
  isHomePage: boolean;
};

export const GameFooterLayout: React.FC = ({ isHomePage }: FooterType) => {
  return (
    <Grid
      className="game-footer"
      container
      spacing={1}
      height="10vh"
      alignContent="center"
      justifyContent="center"
      color={"#fff"}
      mt={5}>
      <Grid container item xs={6} className="footer-left" spacing={1} justifyContent="center" alignContent="center">
        <Grid container item xs={4} paddingTop="4px !important" justifyContent="flex-end" alignContent="center">
          <GroupIcon fontSize="large" />
        </Grid>
        <Grid item xs={8}>
          <Typography fontSize="1.2rem">Bạn bè</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={6} className="footer-right" spacing={1} justifyContent="center" alignContent="center">
        <Grid container item xs={4} paddingTop="4px !important" justifyContent="flex-end" alignContent="center">
          <StorefrontIcon fontSize="large" />
        </Grid>
        <Grid item xs={8}>
          <Typography fontSize="1.2rem">Cửa hàng</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
