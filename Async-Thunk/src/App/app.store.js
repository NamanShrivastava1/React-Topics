import { configureStore } from "@reduxjs/toolkit";
import asyncReducer from "../asyncThunk/state/async.slice";

export const store = configureStore({
  reducer: {
    async: asyncReducer,
  },
});
