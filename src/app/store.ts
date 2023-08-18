import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import movieListReducer from "../reducers/movieList/movieListSlice";
import homeReducer from "../reducers/home/homeSlice";
import tvListsReducer from "../reducers/tvList/tvLists";
import detailReducer from "../reducers/detail/detail";

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
