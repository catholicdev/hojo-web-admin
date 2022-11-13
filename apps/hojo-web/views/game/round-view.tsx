import Image from "next/image";
import { useRouter } from "next/router";

import { ReactComponent as MapCuuUoc } from "@web/public/images/MapCuuUoc.svg";
import React from "react";
import { useRecoilState } from "recoil";

import { Grid } from "@mui/material";

import GameRoundStep from "@web/components/layout/game/game-round-step";

import { getUserStages } from "@web/services/game";

import { selectedStage, userStages } from "@web/utils/states/game";

import ReadBibleModal from "./modal/read-bible.modal";

export const RoundView: React.FC = () => {
  const router = useRouter();
  const { roundId } = router.query;

  const [gameStages, setGameStages] = useRecoilState(userStages);
  const [stage, setStage] = useRecoilState(selectedStage);

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function fetch() {
      if (roundId) {
        const res = await getUserStages(roundId.toString());
        if (res) setGameStages(res.stages);
      }
    }

    fetch();
  }, [roundId]);

  React.useEffect(() => {
    if (stage) {
      setOpenModal(!openModal);
    }
  }, [stage]);

  const handleClickStage = (stage: IStage) => {
    setStage(stage);
  };

  const handleCloseModal = (e: any, reason?: string) => {
    // if (reason && reason == "backdropClick") return;
    setOpenModal(!openModal);
    setStage(undefined);
  };

  return (
    <>
      <div className="map">
        <Grid container spacing={2} alignItems="center" justifyContent="center" alignContent="center">
          {gameStages?.map((stage) => (
            <Grid key={stage.id} item xs={12} className="stage__center" onClick={() => handleClickStage(stage)}>
              <GameRoundStep name={stage.name} star={[false, false, false]} />
            </Grid>
          ))}
        </Grid>
        <MapCuuUoc />
      </div>

      <ReadBibleModal open={openModal} handleClose={handleCloseModal} />
    </>
  );
};
