import * as React from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { Box, Button, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { ReactComponent as Dove } from '@web/public/images/dove.svg';
import { loginGuest, reloginGuest } from '@web/services/auth';
import { authGuestState } from '@web/utils/states/auth';
import mutateStorage from '@web/utils/mutate-storage';

export const SignInView: React.FC = () => {
  const setGuestAuth = useSetRecoilState(authGuestState);
  const router = useRouter();

  const handleLoginGuest = async () => {
    try {
      const guestId = mutateStorage.guestId;
      const appId = mutateStorage.guestAppId;
      let res: any;

      console.log(guestId);

      if (guestId) {
        res = await reloginGuest({ userId: guestId, appId: appId });
      } else {
        res = await loginGuest();
      }

      setGuestAuth({ userId: guestId, appId: appId, ...res });

      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="sign-in"
    >
      <Box className="sign-in-head">
        <Box className="logo">
          <Dove />
        </Box>
      </Box>
      <Box className="sign-in-body">
        <Box className="sign-in-content">
          <div className="sign-in-title">HOJO</div>
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
                borderRadius: '40px',
                width: '100%',
                background: 'linear-gradient(90deg, #0762C8 0%, #00C2E4 100%)',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '20px',
                height: '56px',
                padding: '20px 50px',
              }}
              size="large"
              onClick={handleLoginGuest}
            >
              Tiếp tục
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
