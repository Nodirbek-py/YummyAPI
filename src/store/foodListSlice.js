import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFoodList = createAsyncThunk("foodsList/getFoodList", async () => {
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

const foodListSlice = createSlice({
    name: 'foodList',
    initialState: {
        foodsList: [],
        status: ''
    },
    reducers: {

    },
    extraReducers: {
        [getFoodList.fulfilled]: (state, action) => {
            state.foodsList = action.payload
            state.status = 'fulfilled'
        }
    }
})

export const foodListActions = foodListSlice.actions;
export default foodListSlice.reducer;