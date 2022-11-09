import { ReactComponent as Gold } from "@web/public/images/gold.svg";
import React from "react";

import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";
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
      color={"#fff"}>
      <Grid container item xs={6} className="footer-left" spacing={1} justifyContent="center" alignContent="center">
        <Grid item xs={6} paddingTop="4px !important">
          <GroupIcon fontSize="large" />
        </Grid>
        <Grid item xs={6}>
          <Typography fontSize="1.2rem">Bạn bè</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={6}
        className="footer-right"
        spacing={1}
        justifyContent="center"
        alignContent="center"></Grid>
    </Grid>
  );
};
