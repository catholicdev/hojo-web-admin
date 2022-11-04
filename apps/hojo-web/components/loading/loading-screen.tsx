import * as React from 'react';

import Box from '@mui/material/Box';
import { ReactComponent as Logo } from '@web/public/images/logo.svg';

export const LoadingScreen = () => {
  return (
    <Box
      sx={{ display: 'flex' }}
      flexDirection="column"
      justifyContent="center"
    >
      <Logo />
    </Box>
  );
};
