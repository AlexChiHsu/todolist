import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import movieListReducer from "../features/movieList/movieListSlice";
import homeReducer from "../features/home/homeSlice";
import tvListsReducer from "../features/tvList/tvLists";

export const store = configureStore({
  reducer: {
    homePage: homeReducer,
    movieList: movieListReducer,
    tvLists: tvListsReducer,
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
