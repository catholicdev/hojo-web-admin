import { atom } from 'recoil';

export const authGuestState = atom<IGuest>({
  key: 'authGuestState',
  default: undefined,
});
