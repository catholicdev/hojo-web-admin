import { atom } from "recoil";

export const dailyBible = atom<IBibleSentence>({
  key: "dailyBible",
  default: undefined,
});

export const dailyBibleBackGround = atom<string>({
  key: "dailyBibleBackGround",
  default: undefined,
});
