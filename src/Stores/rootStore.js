import moviesStore from "./Movies/moviesStore";
const { configureStore } = require("@reduxjs/toolkit");

export const rootReducer = configureStore({
  reducer: {
    movies: moviesStore,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
