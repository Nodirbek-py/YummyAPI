import { configureStore } from "@reduxjs/toolkit";
import foodListSlice from "./foodListSlice";
import foodSearchSlice from "./foodSearchSlice";

const store = configureStore({
    reducer: {
        list: foodListSlice,
        search: foodSearchSlice
    }
})

export default store;