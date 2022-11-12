import Image from "next/image";

import StarStage from "@web/public/images/StarStage.png";
import React from "react";

import StarIcon from "@mui/icons-material/Star";

type GameRoundType = {
  name: string;
  star: Array<boolean>;
};

export default function GameRoundStep({ name, star }: GameRoundType) {
  return (
    <div className="round-step">
      <div className="round-step-name">{name ?? "Sáng Thế"}</div>
      <div className="round-step-image-star">
        <Image src={StarStage} width="80" height="40" alt="star-stage" />
      </div>
      {/* <div className="round-step-star">
        <div className={`first-star${star[0] ? "__fill" : ""}`}>
          <StarIcon fontSize="medium" />
        </div>
        <div className={`second-star${star[1] ? "__fill" : ""}`}>
          <StarIcon fontSize="large" />
        </div>
        <div className={`third-star${star[2] ? "__fill" : ""}`}>
          <StarIcon fontSize="medium" />
        </div>
      </div> */}
    </div>
  );
}
