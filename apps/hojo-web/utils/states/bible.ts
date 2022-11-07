import { atom } from 'recoil';

export const dailyBible = atom<IBibleSentence>({
  key: 'dailyBible',
  default: undefined,
});
