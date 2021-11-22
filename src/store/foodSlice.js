import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFoods = createAsyncThunk("foods/getFoods", async () => {
  var options = {
    method: "GET",
    url: "https://yummly2.p.rapidapi.com/feeds/list",
    params: { q: "chicken soup" },
    headers: {
      "x-rapidapi-host": "yummly2.p.rapidapi.com",
      "x-rapidapi-key": "1dc03287fdmsh284954269a9498ep1d483bjsn608326ad6399",
    },
  };
  const response = await axios.request(options);
  return response.data.feed;
});

const foodSlice = createSlice({
  name: "foods",
  initialState: {
    foods: [],
  },
  reducers: {},
  extraReducers: {
    [getFoods.fulfilled]: (state, action) => {
      state.foods = action.payload;
    },
  },
});

export const foodActions = foodSlice.actions;
export default foodSlice.reducer;
