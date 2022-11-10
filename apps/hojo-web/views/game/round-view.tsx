import Image from "next/image";
import { useRouter } from "next/router";

import MapCuuUoc from "@web/public/images/MapCuuUoc.png";
import React from "react";

import GameRoundStep from "@web/components/layout/game/game-round-step";

export const RoundView: React.FC = () => {
  const router = useRouter();
  const { roundId } = router.query;

  React.useEffect(() => {
    async function fetch() {
      if (roundId) {
        return true;
      }
    }

    fetch();
  }, [roundId]);

  const handleClickStage = (stageId) => {
    console.log(stageId);
  };

  return (
    <div className="map">
      <Image src={MapCuuUoc} useMap="#image_map" width="100%" height="100vh" alt="map" />
      <map name="image_map">
        <area target="" alt="" title="" href="#" coords="238,3518,43" shape="circle" onClick={handleClickStage}></area>
        <area target="" alt="" title="" href="#" coords="156,3426,44" shape="circle"></area>
      </map>
      {/* <div className="clickable_stage" onClick={handleClickStage}>
        <GameRoundStep name="Sáng Thế" star={[true, true, false]} />
      </div> */}
      {/* <GameRoundStepLocked /> */}
    </div>
  );
};
