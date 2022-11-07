import { Button, Modal } from '@mui/material';
import { useRecoilValue } from 'recoil';
import * as React from 'react';

import { dailyBible } from '@web/utils/states/bible';

interface DailyBibleInterface {
  openModal: boolean;
  handleClose: () => void;
}

export const DailyBibleModal: React.FC = (props: DailyBibleInterface) => {
  const { openModal, handleClose } = props;
  const bibleSentence = useRecoilValue(dailyBible);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      disableEnforceFocus
    >
      <div className="modal-background">
        <div className="modal-daily-bible">
          <div className="sentence">
            {/* {bibleSentence?.sentence} */}Cha có đủ khả năng làm hại các con,
            nhưng đêm qua Thiên Chúa của cha các con đã phán với cha rằng: “Coi
            chừng, đừng nói bất cứ điều gì với Gia-cóp.”
          </div>
          <div className="sentence-detail">
            {/* ({bibleSentence?.bookAbbreviation} {bibleSentence?.chapterSequence},
            {bibleSentence?.sequence}) */}
            (Xh 2, 12)
          </div>
        </div>
      </div>
    </Modal>
  );
};
