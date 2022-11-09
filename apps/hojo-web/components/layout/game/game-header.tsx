import { ReactComponent as Gold } from "@web/public/images/gold.svg";
import React from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Grid, Typography } from "@mui/material";

type HeaderType = {
  userHeart: number;
  totalReward: number;
  isHomePage: boolean;
};

export const GameHeaderLayout: React.FC = ({ userHeart, totalReward, isHomePage }: HeaderType) => {
  const handleSetting = () => {
    console.log(1);
  };

  return (
    <Grid
      className="game-header"
      container
      spacing={1}
      height="10vh"
      alignContent="center"
      justifyContent="center"
      color={"#fff"}>
      <Grid container item xs={6} className="header-left" spacing={1} justifyContent="center" alignContent="center">
        <Grid item paddingTop="4px !important">
          <FavoriteIcon fontSize="large" sx={{ color: "#F16061" }} />
        </Grid>
        <Grid item>
          <Typography fontSize="1.2rem">{userHeart ?? 5}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={6} className="header-right" spacing={1} justifyContent="center" alignContent="center">
        <Grid item xs={4}>
          <div className="header-icon">
            <Gold />
          </div>
        </Grid>
        <Grid item xs={4}>
          <Typography fontSize="1.2rem">{totalReward ?? 1000}</Typography>
        </Grid>
        <Grid container item xs={2} justifyContent="flex-end" alignContent="center">
          <SettingsIcon
            fontSize="medium"
            sx={{ color: "white", zIndex: 1, cursor: "pointer" }}
            onClick={handleSetting}
          />
        </Grid>
      </Grid>

      <Grid container item xs={12} justifyContent="center" alignContent="flex-end">
        <div className="header-avatar">
          <Avatar sx={{ width: 90, height: 90 }} />
        </div>
      </Grid>
    </Grid>
  );
};
