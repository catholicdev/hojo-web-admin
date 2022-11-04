import { atom } from 'recoil';

import { STATUS } from '@web/config';

export const toastState = atom({
  key: 'toastStateAtom',
  default: {
    open: false,
    vertical: 'top',
    horizontal: 'center',
    message: '',
    title: '',
    type: STATUS.SUCCESS, //success | warning | info| error
  },
});
