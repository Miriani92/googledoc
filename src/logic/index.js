import { configureStore } from "@reduxjs/toolkit";
import nav from "./reducers/navigations";
import option from "./reducers/optionsBar";

const { navReducer } = nav;
const { optionReducer } = option;

export const store = configureStore({
  reducer: { navReducer, optionReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
