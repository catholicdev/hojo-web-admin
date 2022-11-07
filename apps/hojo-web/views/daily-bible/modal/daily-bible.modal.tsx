import * as React from "react";
import { useRecoilValue } from "recoil";

import { Modal } from "@mui/material";

import { dailyBible } from "@web/utils/states/bible";

interface DailyBibleInterface {
  open: boolean;
  handleClose: () => void;
}

export default function DailyBibleModal({ open, handleClose }: DailyBibleInterface) {
  const bibleSentence = useRecoilValue(dailyBible);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      disableEnforceFocus>
      <div className="modal-background">
        <div className="modal-daily-bible">
          <div className="sentence">{bibleSentence?.sentence}</div>
          <div className="sentence-detail">
            ({bibleSentence?.bookAbbreviation} {bibleSentence?.chapterSequence},{bibleSentence?.sequence})
          </div>
        </div>
      </div>
    </Modal>
  );
}
