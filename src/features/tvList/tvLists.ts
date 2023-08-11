import { createSlice } from "@reduxjs/toolkit";
import { MovieListProp } from "../../types/movieList";
import {
  fetchPopularTVListUs,
  fetchPopularTVListZh,
  fetchPopularTVListKr,
  fetchPopularTVAnimationList,
  fetchTopRatedTVList,
} from "../../reducers/tvListsResucers";

export interface IMovieListState {
  usData: MovieListProp;
  zhData: MovieListProp;
  krData: MovieListProp;
  aniData: MovieListProp;
  topRatedData: MovieListProp;
}

const initialState: IMovieListState = {
  usData: {
    json: null,
    page: 0,
    results: [
      {
        adult: false,
        backdrop_path: "",
        genre_ids: [0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
        name: "",
      },
    ],
    total_pages: 0,
    total_results: 0,
  },
  zhData: {
    json: null,
    page: 0,
    results: [
      {
        adult: false,
        backdrop_path: "",
        genre_ids: [0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
        name: "",
      },
    ],
    total_pages: 0,
    total_results: 0,
  },
  krData: {
    json: null,
    page: 0,
    results: [
      {
        adult: false,
        backdrop_path: "",
        genre_ids: [0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
        name: "",
      },
    ],
    total_pages: 0,
    total_results: 0,
  },
  aniData: {
    json: null,
    page: 0,
    results: [
      {
        adult: false,
        backdrop_path: "",
        genre_ids: [0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
        name: "",
      },
    ],
    total_pages: 0,
    total_results: 0,
  },
  topRatedData: {
    json: null,
    page: 0,
    results: [
      {
        adult: false,
        backdrop_path: "",
        genre_ids: [0],
        id: 0,
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        release_date: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
    ],
    total_pages: 0,
    total_results: 0,
  },
};

export const tvLists = createSlice({
  name: "popular tv list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularTVListUs.fulfilled, (state, action) => {
      state.usData = action.payload;
    });
    builder.addCase(fetchPopularTVListZh.fulfilled, (state, action) => {
      state.zhData = action.payload;
    });
    builder.addCase(fetchPopularTVListKr.fulfilled, (state, action) => {
      state.krData = action.payload;
    });

    builder.addCase(fetchPopularTVAnimationList.fulfilled, (state, action) => {
      state.aniData = action.payload;
    });
    builder.addCase(fetchTopRatedTVList.fulfilled, (state, action) => {
      state.topRatedData = action.payload;
    });
  },
});

export default tvLists.reducer;
