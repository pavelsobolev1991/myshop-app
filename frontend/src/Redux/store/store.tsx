import { configureStore } from "@reduxjs/toolkit";
import MainListSlice from "../../Components/Main/Main.slice";

const store = configureStore({
  reducer: {
    cardList: MainListSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
