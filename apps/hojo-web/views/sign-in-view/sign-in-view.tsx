import * as React from 'react';

import { Box, Button, Typography } from '@mui/material';
import { ReactComponent as Dove } from '@web/public/images/dove.svg';

export const SignInView: React.FC = () => {
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
            <Button
              variant="contained"
              className="btn btn-primary"
              size="large"
            >
              Tiếp tục
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
