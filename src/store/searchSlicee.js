import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSearch = createAsyncThunk("search/getSearch", async function(param) {
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

    const res = await axios.request(options)
    return res.data;
})

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        search: []
    },
    reducers: {

    },
    extraReducers: {
        [getSearch.fulfilled]: (state, action) => {
            state.search = action.payload;
        }
    }
})

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;