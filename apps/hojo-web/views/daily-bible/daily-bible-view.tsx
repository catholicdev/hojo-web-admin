import { Box } from '@mui/material';
import * as React from 'react';

import { ReactComponent as BackgroundDaily } from '@web/public/images/backgrounddaily.svg';
import { ReactComponent as DailyBible } from '@web/public/images/dailybible.svg';
import { ReactComponent as DailyBibleCenter } from '@web/public/images/dailybiblecenter.svg';
import { ReactComponent as DailyBibleBottom } from '@web/public/images/dailybiblebottom.svg';
import { ReactComponent as Bible } from '@web/public/images/bible.svg';

export const DailyBibleView: React.FC = () => {
  const handleGetDailyBile = () => {
    return true;
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
    </Box>
  );
};
