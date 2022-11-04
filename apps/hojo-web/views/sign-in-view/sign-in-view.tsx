import * as React from 'react';
import { useRouter } from 'next/router';

import { Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ReactComponent as Dove } from '@web/public/images/dove.svg';

import { loginGuest } from '@web/services/auth';
import { useSetRecoilState } from 'recoil';
import { authGuestState } from '@web/utils/states/auth';

export const SignInView: React.FC = () => {
  const setGuestAuth = useSetRecoilState(authGuestState);
  const router = useRouter();

  const handleLoginGuest = async () => {
    try {
      const res = await loginGuest();

      setGuestAuth(res);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box height="40vh" justifyItems={'center'} className="sign-in-head">
        <Box className="logo">
          <Dove />
        </Box>
      </Box>
      <Box width="100%">
        <Box
          className="sign-in-content"
          display="flex"
          flexDirection="column"
          alignItems="center"
          height="60vh"
        >
          <Typography className="sign-in-title" color="primary">
            HOJO
          </Typography>
          <Typography className="sign-in-description" color="primary">
            Hành Trình Nên Thánh.
            <br />
            Cuốn Kinh Thánh 4.0
            <br />
            dành cho các bạn trẻ.
          </Typography>
          <Box mt="140px">
            <LoadingButton
              variant="contained"
              className="btn btn-primary"
              size="large"
              onClick={handleLoginGuest}
            >
              Tiếp tục
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
