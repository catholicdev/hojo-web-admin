// import { saveAs } from "file-saver";
// import { toBlob, toCanvas, toJpeg } from "html-to-image";
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

    // toBlob(document.getElementById("modal-daily-bible"), { cacheBust: true }).then(function (blob) {
    //   if (window.saveAs) {
    //     window.saveAs(blob, "my-bible.png");
    //   } else {
    //     saveAs(blob, "my-bible.png");
    //   }
    // });
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
        id="my-bible"
        className="modal-background"
        style={{
          background: `url(${backgroundUrl})`,
          backgroundRepeat: "no-repeat",
          maxWidth: "400px",
          position: "relative",
          borderRadius: "32px",
        }}>
        <IconButton
          sx={{ position: "absolute", top: "20px", right: "20px" }}
          size="large"
          onClick={(e) => handleClose(e, null)}>
          <CloseIcon fontSize="inherit" />
        </IconButton>
        <div id="modal-daily-bible" className="modal-daily-bible">
          <div className="sentence">{bibleSentence?.sentence}</div>
          <div className="sentence-detail">
            ({bibleSentence?.bookAbbreviation} {bibleSentence?.chapterSequence},{bibleSentence?.sequence})
          </div>
        </div>
        {/* <div className="modal-btn-share">
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
        </div> */}
      </div>
    </Modal>
  );
}
