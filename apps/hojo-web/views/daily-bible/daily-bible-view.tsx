import { useRouter } from "next/router";

import { ReactComponent as BackgroundDaily } from "@web/public/images/backgrounddaily.svg";
import { ReactComponent as Bible } from "@web/public/images/bible.svg";
import { ReactComponent as DailyBible } from "@web/public/images/dailybible.svg";
import { ReactComponent as DailyBibleBottom } from "@web/public/images/dailybiblebottom.svg";
import { ReactComponent as DailyBibleCenter } from "@web/public/images/dailybiblecenter.svg";
import * as React from "react";
import { useSetRecoilState } from "recoil";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, IconButton } from "@mui/material";

import { getGuestDailyBible } from "@web/services/user";

import mutateStorage from "@web/utils/mutate-storage";
import { dailyBible } from "@web/utils/states/bible";

import { DailyBibleModal } from "./modal/daily-bible.modal";

export const DailyBibleView: React.FC = () => {
  const router = useRouter();

  const setBibleSentence = useSetRecoilState(dailyBible);

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleGetDailyBile = async () => {
    try {
      const guestId = mutateStorage.guestId;
      let res: IBibleSentence;

      if (guestId) {
        res = await getGuestDailyBible();
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

  const handleCloseModal = () => {
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

      <DailyBibleModal openModal={openModal} handleClose={handleCloseModal} />
    </>
  );
};
