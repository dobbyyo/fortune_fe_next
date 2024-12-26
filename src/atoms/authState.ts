import { atom } from "recoil";

export const isAuthenticatedState = atom<boolean>({
  key: "authState",
  default: false,
});
