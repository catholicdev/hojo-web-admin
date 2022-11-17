import { useRouter } from "next/router";

import { ReactComponent as GameCucUoc } from "@web/public/images/gameCucUoc.svg";
import { ReactComponent as GameHiepHanh } from "@web/public/images/gameHiepHanh.svg";
import { ReactComponent as GameRankingBackground } from "@web/public/images/gameRankingBackground.svg";
import { ReactComponent as GameTanUoc } from "@web/public/images/gameTanUoc.svg";
import React from "react";
import { useRecoilState } from "recoil";

import { Avatar, Grid, Typography } from "@mui/material";

import { GameLayout } from "@web/components/layout/game/game-layout";

import { getRounds } from "@web/services/game";

import { rounds } from "@web/utils/states/game";

export const GameView: React.FC = () => {
  const router = useRouter();
  const [gameRounds, setGameRounds] = useRecoilState(rounds);

  const handleRoundClick = (roundId) => {
    console.log(roundId);
    router.push(`round/${roundId}`);
  };

  React.useEffect(() => {
    async function loadData() {
      if (!gameRounds) {
        const res = await getRounds();
        if (res) {
          setGameRounds(res);
        }
      }
    }

    loadData();
  }, []);

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
          justifyContent="center"
          alignContent="center"
          flexDirection="column"
          className="body-round"
          mt={5}>
          <Grid
            container
            item
            xs={10}
            spacing={2}
            justifyContent="center"
            alignContent="center"
            className="round-item"
            onClick={() => handleRoundClick(gameRounds[0].id)}>
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
