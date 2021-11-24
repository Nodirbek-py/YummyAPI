import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getFoodSearch = createAsyncThunk("foodSearch/getFoodSearch", async function(param) {
    var options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/search',
        params: {
          start: '0',
          maxResult: '18',
          maxTotalTimeInSeconds: '7200',
          q: param,
          allowedAttribute: '',
          FAT_KCALMax: '1'
        },
        headers: {
          'x-rapidapi-host': 'yummly2.p.rapidapi.com',
          'x-rapidapi-key': '1dc03287fdmsh284954269a9498ep1d483bjsn608326ad6399'
        }
      };

      const res = await axios.request(options);
      return res.data;
})

const foodSearchSlice = createSlice({
    name: 'foodSearch',
    initialState: {
        foodsSearch: [],
        status: ''
    },
    reducers: {

    },
    extraReducers: {
        [getFoodSearch.fulfilled]: (state, action) => {
            state.foodsSearch = action.payload
            state.status = 'fulfilled'
        }
    }
})

export const foodSearchActions = foodSearchSlice.actions;
export default foodSearchSlice.reducer;