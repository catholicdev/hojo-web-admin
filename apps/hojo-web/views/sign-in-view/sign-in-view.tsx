import { useRouter } from "next/router";

import { ReactComponent as Dove } from "@web/public/images/dove.svg";
import * as React from "react";
import { useSetRecoilState } from "recoil";

import { Box, Button } from "@mui/material";

import { loginGuest, reloginGuest } from "@web/services/auth";

import mutateStorage from "@web/utils/mutate-storage";
import { authGuestState } from "@web/utils/states/auth";

export const SignInView: React.FC = () => {
  const setGuestAuth = useSetRecoilState(authGuestState);
  const router = useRouter();

  const handleLoginGuest = async () => {
    try {
      const guestId = mutateStorage.guestId;
      const appId = mutateStorage.guestAppId;
      let res: any;

      if (guestId) {
        res = await reloginGuest({ userId: guestId, appId: appId });
      } else {
        res = await loginGuest();
      }

      setGuestAuth({ userId: guestId, appId: appId, ...res });

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" className="sign-in">
      <Box className="sign-in-head" height={{ xs: "40%", md: "50%" }}>
        <Box className="logo">
          <Dove />
        </Box>
      </Box>
      <Box className="sign-in-body" height={{ xs: "60%", md: "50%" }}>
        <Box className="sign-in-content" top={{ xs: "230px", lg: "320px" }}>
          <Box className="sign-in-title" mt={{ xs: "70px", lg: "80px" }}>
            HOJO
          </Box>
          <div className="sign-in-description">
            Hành Trình Nên Thánh.
            <br />
            Cuốn Kinh Thánh 4.0
            <br />
            dành cho các bạn trẻ.
          </div>
          <Box mt="140px">
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
                padding: "20px 50px",
              }}
              size="large"
              onClick={handleLoginGuest}>
              Tiếp tục
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
