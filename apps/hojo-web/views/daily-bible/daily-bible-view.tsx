import { Box, IconButton } from '@mui/material';
import * as React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { ReactComponent as BackgroundDaily } from '@web/public/images/backgrounddaily.svg';
import { ReactComponent as DailyBible } from '@web/public/images/dailybible.svg';
import { ReactComponent as DailyBibleCenter } from '@web/public/images/dailybiblecenter.svg';
import { ReactComponent as DailyBibleBottom } from '@web/public/images/dailybiblebottom.svg';
import { ReactComponent as Bible } from '@web/public/images/bible.svg';
import { useRouter } from 'next/router';

export const DailyBibleView: React.FC = () => {
  const router = useRouter();

  const handleGetDailyBile = () => {
    return true;
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
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
        <div className="center-bible">
          <Box onClick={handleGetDailyBile}>
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
  );
};
