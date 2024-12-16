import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice/profileSlice"
import tvShowReducer from "./tvShowsSlice/tvShowSlice"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    tvShows: tvShowReducer,
  },
});
export default store;
