import { STATUS } from "@web/configs";
import { atom } from "recoil";

export const toastState = atom({
  key: "toastStateAtom",
  default: {
    open: false,
    vertical: "top",
    horizontal: "center",
    message: "",
    title: "",
    type: STATUS.SUCCESS, //success | warning | info| error
  },
});
