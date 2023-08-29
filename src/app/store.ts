import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import movieListReducer from "../reducers/movieList/movieListSlice";
import homeReducer from "../reducers/home/homeSlice";
import tvListsReducer from "../reducers/tvList/tvLists";
import detailReducer from "../reducers/detail/detail";
import userReducer from "../reducers/user/userSlice";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2, // 檢視 'Merge Process' 部分的具體情況
};

const reducer = combineReducers({
  homePage: homeReducer,
  movieList: movieListReducer,
  tvLists: tvListsReducer,
  detail: detailReducer,
  user: userReducer,
});

const persistedReducer = persistReducer<any, any>(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
