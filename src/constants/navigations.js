import { HiDocumentText } from "react-icons/hi";
import {
  AiFillFolderOpen,
  AiOutlineDownload,
  AiOutlinePrinter,
} from "react-icons/ai";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineDelete,
} from "react-icons/md";
export const navigationsHeader = [
  "File",
  "Edit",
  "View",
  "Insert",
  "Format",
  "Tools",
  "Exstensions",
  "Help",
];
const fileHeaders = ["New", "Open", "Download", "Rename", "Delete", "Print"];
const editHeaders = ["Undo", "Redo", "Copy", "Paste"];
const insertHeaders = ["Insert Image", "Create Table"];
const formatHeaders = ["text"];
const textHeaders = ["Bold", "Italic", "UnderLine"];

export const allDropDownHeaders = {
  File: fileHeaders,
  Edit: editHeaders,
  Insert: insertHeaders,
  Format: formatHeaders,
  text: textHeaders,
};

export const iconsObj = {
  New: HiDocumentText,
  Download: AiOutlineDownload,
  Open: AiFillFolderOpen,
  Delete: MdOutlineDelete,
  Rename: MdOutlineDriveFileRenameOutline,
  Print: AiOutlinePrinter,
};
