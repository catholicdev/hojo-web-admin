import Image from "next/image";
import { useRouter } from "next/router";

import { ReactComponent as MapCuuUoc } from "@web/public/images/MapCuuUoc.svg";
import React from "react";
import { useRecoilState } from "recoil";

import { Grid } from "@mui/material";

import GameRoundStep from "@web/components/layout/game/game-round-step";

import { getUserStages } from "@web/services/game";

import { userStages } from "@web/utils/states/game";

export const RoundView: React.FC = () => {
  const router = useRouter();
  const { roundId } = router.query;

  const [gameStages, setGameStages] = useRecoilState(userStages);

  React.useEffect(() => {
    async function fetch() {
      if (roundId) {
        const res = await getUserStages(roundId.toString());
        if (res) setGameStages(res.stages);
      }
    }

    fetch();
  }, [roundId]);

  const handleClickStage = (stageId: string) => {
    console.log(stageId);
  };

  return (
    <div className="map">
      <Grid container spacing={2} alignItems="center" justifyContent="center" alignContent="center">
        {gameStages?.map((stage) => (
          <Grid key={stage.id} item xs={12} className="stage__center" onClick={() => handleClickStage(stage.id)}>
            <GameRoundStep name={stage.name} star={[false, false, false]} />
          </Grid>
        ))}
      </Grid>
      <MapCuuUoc />
    </div>
  );
};
