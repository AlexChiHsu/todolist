import { GenresProp, MovieListProp } from "../../types/movieList";

export const initialList = {
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
      character: "",
      credit_id: "",
      order: 0,
      media_type: "",
      department: "",
      job: "",
    },
  ],
  total_pages: 0,
  total_results: 0,
} as MovieListProp;

export const initialGenresList = {
  genres: [
    {
      id: 0,
      name: "",
    },
  ],
} as GenresProp;
