import { useRouter } from "next/router";

import { ReactComponent as Dove } from "@web/public/images/dove.svg";
import * as React from "react";
import { useSetRecoilState } from "recoil";

import { Box, Button, Grid, Typography } from "@mui/material";

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
      <Box padding={6}>
        <Box className="logo">
          <Dove />
        </Box>
      </Box>

      <Box className="sign-in-content">
        <Grid container spacing={7} justifyContent="space-around" alignItems="center" flexDirection="column">
          <Grid item xs={12} mt={8}>
            <Typography fontWeight="800" fontSize="3rem" fontFamily="inherit" color="var(--primary-color)">
              HOJO
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontWeight="400"
              fontSize="1.2rem"
              fontFamily="inherit"
              textAlign="center"
              color="var(--primary-color)">
              Hành Trình Nên Thánh 4.0
              <br />
              Dành cho người trẻ Việt.
            </Typography>
          </Grid>
          <Grid item xs={12} mt={8}>
            <Box>
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
          </Grid>
        </Grid>
      </Box>
    </Box >
  );
};
