import { createSlice } from "@reduxjs/toolkit";
import {
  setActiveHeader,
  closeModal,
  setTitle,
} from "../actions/navigatonActions";

const initialState = {
  active: false,
  activeHeader: "",
  elementPosition: {},
  title: "",
};

const navigationReducer = createSlice({
  name: "navigations",
  initialState,
  reducers: { setActiveHeader, closeModal, setTitle },
});

export default {
  navReducer: navigationReducer.reducer,
  navAction: navigationReducer.actions,
};
