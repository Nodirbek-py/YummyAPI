import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./foodSlice";
import searchSlice from "./searchSlicee";
const store = configureStore({
  reducer: {foodSlice, searchSlice}
});

export default store;
