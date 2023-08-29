export interface MovieListProp {
  json: any;
  page: number;
  results: [MovieProp];
  total_pages: number;
  total_results: number;
}

export interface MovieProp {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name: string;
  character: string;
  credit_id: string;
  order: number;
  media_type: string;
  department: string;
  job: string;
  type: string;
}

export interface DetailProp {
  adult: boolean;
  backdrop_path: string;
  created_by: [
    {
      id: number;
      credit_id: string;
      name: string;
      gender: number;
      profile_path: string;
    }
  ];
  episode_run_time: [number];
  first_air_date: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: [string];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: null;
    season_number: number;
    show_id: number;
    still_path: string;
  };
  name: string;
  next_episode_to_air: null;
  networks: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  seasons: [
    {
      air_date: string;
      episode_count: number;
      id: number;
      name: string;
      overview: string;
      poster_path: string;
      season_number: number;
      vote_average: number;
    }
  ];
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  title: string;
  release_date: string;
  runtime: number;
}

export interface GenresProp {
  genres: [
    {
      id: number;
      name: string;
    }
  ];
}
