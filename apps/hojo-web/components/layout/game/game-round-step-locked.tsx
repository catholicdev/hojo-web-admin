import React from "react";

import LockIcon from "@mui/icons-material/Lock";

type GameRoundType = {
  name: string;
};

export const GameRoundStepLocked: React.FC = () => {
  return (
    <div className="round-step-locked">
      <div className="round-step-locked-icon">
        <LockIcon fontSize="large" />
      </div>
    </div>
  );
};
