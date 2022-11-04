import { atom } from "recoil";

export const authState = atom<IUser>({
  key: "authState",
  default: undefined,
});
