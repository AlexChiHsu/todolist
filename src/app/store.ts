import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import movieListReducer from "../features/movieList/movieListSlice";
import homeReducer from "../features/home/homeSlice";

export const store = configureStore({
  reducer: {
    homePage: homeReducer,
    movieList: movieListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
