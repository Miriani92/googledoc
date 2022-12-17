import { createSlice } from "@reduxjs/toolkit";
import {
  undo,
  redo,
  getInputs,
  changeFont,
  changeZoomLevel,
  handleClickAddFile,
} from "../actions/optionBarActions";

const initialState = {
  barActions: [],
  textAreaInputs: "",
  zoomLevel: "50",
  font: "verdana",
  cached: [],
};

const navigationReducer = createSlice({
  name: "optionsbar",
  initialState,
  reducers: {
    undo,
    redo,
    getInputs,
    changeFont,
    changeZoomLevel,
    handleClickAddFile,
  },
});

export default {
  optionReducer: navigationReducer.reducer,
  optionAction: navigationReducer.actions,
};
