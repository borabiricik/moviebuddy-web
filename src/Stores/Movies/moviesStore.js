import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { defaultApi, detailsApi } from "../../Constants/api";

const initialState = {
  movies: null,
  loading: false,
};

export const getMovies = createAsyncThunk("getMovies", async (state) => {
  const response = await defaultApi.get("/trending/all/week");
  console.log(response);
  return response;
});


const moviesStore = createSlice({
  name: "movies",
  initialState,
  extraReducers: ({ addCase }) => {
    addCase(getMovies.pending, (state, action) => {
      state.loading = true;
    });
    addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload.data.results;
      state.loading = false;
    });
  },
});

export default moviesStore.reducer;
