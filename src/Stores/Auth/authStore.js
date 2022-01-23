const { createSlice } = require("@reduxjs/toolkit");

const initialState = {};

const authStore = createSlice({
  name: "auth",
  initialState,
  extraReducers: ({ addCase }) => {},
});

export default authStore.reducer
