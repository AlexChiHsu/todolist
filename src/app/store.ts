import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import movieListReducer from "../features/movieList/movieListSlice";
import homeReducer from "../features/home/homeSlice";
import tvListsReducer from "../features/tvList/tvLists";
import detailReducer from "../features/detail/detail";

export const store = configureStore({
  reducer: {
    homePage: homeReducer,
    movieList: movieListReducer,
    tvLists: tvListsReducer,
    detail: detailReducer,
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
