import { ReactComponent as GameCucUoc } from "@web/public/images/gameCucUoc.svg";
import { ReactComponent as GameHiepHanh } from "@web/public/images/gameHiepHanh.svg";
import { ReactComponent as GameRankingBackground } from "@web/public/images/gameRankingBackground.svg";
import { ReactComponent as GameTanUoc } from "@web/public/images/gameTanUoc.svg";
import React from "react";

import { Avatar, Grid, Typography } from "@mui/material";

import { GameLayout } from "@web/components/layout/game/game-layout";

export const GameView: React.FC = () => {
  return (
    <GameLayout>
      <Grid container spacing={2} flexDirection="column" alignContent="center" className="game-body">
        <Grid container item xs={12} justifyContent="center" alignContent="center" className="body-ranking">
          <div className="ranking-background">
            <GameRankingBackground />
            <div className="ranking-background-item__first">
              <Avatar sx={{ width: 100, height: 100, background: "#FFFCCD", border: "10px solid #FFF104" }} />
            </div>

            <div className="ranking-background-item__second">
              <Avatar sx={{ width: 100, height: 100, background: "#FFFCCD", border: "10px solid #FFC107" }} />
            </div>

            <div className="ranking-background-item__third">
              <Avatar sx={{ width: 100, height: 100, background: "#FFFCCD", border: "10px solid #FF7B02" }} />
            </div>
          </div>
        </Grid>
        <Grid
          container
          item
          xs={12}
          justifyContent="space-around"
          alignContent="center"
          flexDirection="column"
          className="body-round">
          <Grid container item xs={10} spacing={2} justifyContent="center" alignContent="center" className="round-item">
            <Grid item xs={6}>
              <div className="round-icon">
                <GameCucUoc />
              </div>
            </Grid>
            <Grid item xs={6} paddingTop="0px !important">
              <Typography fontSize="1.4rem" textAlign="center" fontWeight={500}>
                Khám phá
                <br />
                Cựu Ước
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={10} spacing={2} justifyContent="center" alignContent="center" className="round-item">
            <Grid item xs={6}>
              <div className="round-icon">
                <GameTanUoc />
              </div>
            </Grid>
            <Grid item xs={6} paddingTop="0px !important">
              <Typography fontSize="1.4rem" textAlign="center" fontWeight={500}>
                Học hỏi
                <br />
                Tân Ước
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={10} spacing={2} justifyContent="center" alignContent="center" className="round-item">
            <Grid item xs={6}>
              <div className="round-icon">
                <GameHiepHanh />
              </div>
            </Grid>
            <Grid item xs={6} paddingTop="0px !important">
              <Typography fontSize="1.4rem" textAlign="center" fontWeight={500}>
                Bước đi
                <br />
                Hiệp Hành
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </GameLayout>
  );
};
