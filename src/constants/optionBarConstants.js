import { MdUndo, MdRedo } from "react-icons/md";
import {
  onClickRedo,
  onClickUndo,
  onSelectFont,
  onSelectPercentage,
} from "../utils/onClickOptionBarBtn";

export const optionHeaders = [
  { name: "Undo", Icon: MdUndo, clickHandler: onClickUndo },
  { name: "Redo", Icon: MdRedo, clickHandler: onClickRedo },
];

export const selectOptions = [
  {
    name: "Zoom",
    clickHandler: onSelectPercentage,
    select: ["50%", "75%", "100%", "125%"],
  },
  {
    name: "Font",
    clickHandler: onSelectFont,
    select: ["Verdana", "Roboto", "Oswald"],
  },
];
