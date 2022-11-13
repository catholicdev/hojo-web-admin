import { atom } from "recoil";

export const rounds = atom<IRound>({
  key: "rounds",
  default: undefined,
});

export const userStages = atom<Array<IUserStage>>({
  key: "userStages",
  default: undefined,
});

export const selectedStage = atom<IStage>({
  key: "selectedStage",
  default: undefined,
});
