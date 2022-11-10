import { atom } from "recoil";

export const rounds = atom<IRound>({
  key: "rounds",
  default: undefined,
});
