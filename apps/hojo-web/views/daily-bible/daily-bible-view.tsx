import { useRouter } from "next/router";

import { ReactComponent as BackgroundDaily } from "@web/public/images/backgrounddaily.svg";
import { ReactComponent as Bible } from "@web/public/images/bible.svg";
import { ReactComponent as DailyBible } from "@web/public/images/dailybible.svg";
import { ReactComponent as DailyBibleBottom } from "@web/public/images/dailybiblebottom.svg";
import { ReactComponent as DailyBibleCenter } from "@web/public/images/dailybiblecenter.svg";
import random from "random";
import * as React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, IconButton } from "@mui/material";

import { getGuestDailyBible } from "@web/services/user";

import mutateStorage from "@web/utils/mutate-storage";
import { dailyBible, dailyBibleBackGround } from "@web/utils/states/bible";

import firebase from "@web/config/db/scFirebase";

import DailyBibleModal from "./modal/daily-bible.modal";

export const DailyBibleView: React.FC = () => {
  const router = useRouter();
  const storage = firebase.storage();

  const setBibleSentence = useSetRecoilState(dailyBible);
  const [background, setBackground] = useRecoilState(dailyBibleBackGround);

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleGetDailyBile = async () => {
    try {
      const guestId = mutateStorage.guestId;
      let res: IBibleSentence;

      if (guestId) {
        res = await getGuestDailyBible();
      }

      if (!background) {
        const newNumber = random.int(1, 14).toString().padStart(2, "0");
        const imageRef = storage.ref("images/daily-background").child(`nen-boc-loi-Chua-${newNumber}.svg`);

        imageRef.getDownloadURL().then((imageUrl) => {
          setBackground(imageUrl);
        });
      }

      setBibleSentence(res);
      setOpenModal(!openModal);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  const handleCloseModal = (e: Event, reason: string) => {
    if (reason && reason == "backdropClick") return;
    setOpenModal(!openModal);
  };

  return (
    <>
      <Box className="daily-bible">
        <div className="daily-background">
          <BackgroundDaily />
        </div>

        <div className="daily-bible-center">
          <div className="center-cloud">
            <DailyBible />
          </div>
          <div className="center">
            <DailyBibleCenter />
          </div>
          <div className="center-bible" onClick={handleGetDailyBile}>
            <Box>
              <Bible />
            </Box>
          </div>
        </div>

        <div className="daily-bible-bottom">
          <DailyBibleBottom />
        </div>

        <div className="daily-bible-text">
          Hãy nhấp vào cuốn Kinh Thánh
          <br />
          để xem lời Chúa
          <br />
          dành cho bạn hôm nay nhé
        </div>

        <div className="daily-bible-icon">
          <IconButton size="medium" onClick={handleBack}>
            <ArrowBackIosNewIcon fontSize="inherit" color="primary" />
          </IconButton>
        </div>
      </Box>

      <DailyBibleModal open={openModal} handleClose={handleCloseModal} />
    </>
  );
};
