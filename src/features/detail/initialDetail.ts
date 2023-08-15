import { DetailProp } from "../../types/movieList";

export const initialDetail = {
  adult: false,
  backdrop_path: "",
  created_by: [
    {
      id: 0,
      credit_id: "",
      name: "",
      gender: 0,
      profile_path: "",
    },
  ],
  episode_run_time: [0],
  first_air_date: "",
  genres: [
    {
      id: 0,
      name: "",
    },
  ],
  homepage: "",
  id: 0,
  in_production: false,
  languages: [""],
  last_air_date: "",
  last_episode_to_air: {
    id: 0,
    name: "",
    overview: "",
    vote_average: 0,
    vote_count: 0,
    air_date: "",
    episode_number: 0,
    episode_type: "",
    production_code: "",
    runtime: null,
    season_number: 0,
    show_id: 0,
    still_path: "",
  },
  name: "",
  next_episode_to_air: null,
  networks: [
    {
      id: 0,
      logo_path: "",
      name: "",
      origin_country: "",
    },
  ],
  number_of_episodes: 0,
  number_of_seasons: 0,
  origin_country: [""],
  original_language: "",
  original_name: "",
  overview: "",
  popularity: 0,
  poster_path: "",
  production_companies: [
    {
      id: 0,
      logo_path: "",
      name: "",
      origin_country: "",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "",
      name: "",
    },
  ],
  seasons: [
    {
      air_date: "",
      episode_count: 0,
      id: 0,
      name: "",
      overview: "",
      poster_path: "",
      season_number: 0,
      vote_average: 0,
    },
  ],
  spoken_languages: [
    {
      english_name: "",
      iso_639_1: "",
      name: "",
    },
  ],
  status: "",
  tagline: "",
  type: "",
  vote_average: 0,
  vote_count: 0,
} as DetailProp;
