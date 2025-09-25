import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading : false,
    error: false,
    data : null,
}

export const apiFetch =  createAsyncThunk("apiFetch" , async (query) => {

   const fetch = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=1493ff80`)
   console.log(fetch);
   return fetch.data.Search || []

})


export const MovieSlice = createSlice({
    name:'movie',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(apiFetch.fulfilled , (state , action) => {
            state.loading = false
            state.error = false
            state.data = action.payload
        })
        builder.addCase(apiFetch.pending , (state) => {
            state.loading = true
        })
        builder.addCase(apiFetch.rejected , (state , action) => {
            console.log("error" , action.payload);
            state.error = true
        })
    }

})

export default MovieSlice.reducer