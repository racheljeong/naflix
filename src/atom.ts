import { atom } from "recoil";
import { lightTheme } from "./theme";


export const isModeAtom = atom({
    key:"isModeAtom",
    default: lightTheme
});