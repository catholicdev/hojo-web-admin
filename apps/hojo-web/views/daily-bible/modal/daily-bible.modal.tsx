import * as React from "react";
import { useRecoilValue } from "recoil";

import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton, Modal } from "@mui/material";

import { dailyBible, dailyBibleBackGround } from "@web/utils/states/bible";

type DailyBibleType = {
  open: boolean;
  handleClose: (e: any, reason?: string) => void;
};

export default function DailyBibleModal({ open, handleClose }: DailyBibleType) {
  const bibleSentence = useRecoilValue(dailyBible);
  const backgroundUrl = useRecoilValue(dailyBibleBackGround);

  const handleDownloadDailyBible = () => {
    console.log("download");
  };

  return (
    <Modal
      disableAutoFocus
      open={open}
      onClose={(e, reason) => handleClose(e, reason)}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div
        className="modal-background"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
          backgroundRepeat: "no-repeat",
          maxWidth: "400px",
          position: "relative",
          borderRadius: "2rem",
        }}>
        <IconButton
          sx={{ position: "absolute", top: "20px", right: "20px" }}
          size="large"
          onClick={(e) => handleClose(e, null)}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <div className="modal-daily-bible">
          <div className="sentence">{bibleSentence?.sentence}</div>
          <div className="sentence-detail">
            ({bibleSentence?.bookAbbreviation} {bibleSentence?.chapterSequence},{bibleSentence?.sequence})
          </div>
        </div>
        <div className="modal-btn-share">
          <Button
            variant="contained"
            sx={{
              borderRadius: "40px",
              width: "100%",
              background: "linear-gradient(90deg, #0762C8 0%, #00C2E4 100%)",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "20px",
              height: "56px",
              padding: "20px 30px",
            }}
            size="large"
            onClick={handleDownloadDailyBible}>
            Tải xuống
          </Button>
        </div>
      </div>
    </Modal>
  );
}
