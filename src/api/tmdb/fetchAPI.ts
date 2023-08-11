import { apiURL, headers } from "./commonURL";

const URL = {
  GET_POPULAR_MOVIE_LIST: "/movie/popular?language={LANGUAGE}&page={PAGE}",
  GET_POPULAR_TV_LIST:
    "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=zh-TW&page=1&sort_by=popularity.desc&with_origin_country={country}&with_original_language={language}",
  GET_POPULAR_TV_ANIMATION_LIST: "/discover/tv?with_genres=16",
};
const options = {
  method: "GET",
  headers: headers,
};
export function getPopularMovieList(language: string) {
  const fullURL =
    apiURL +
    URL.GET_POPULAR_MOVIE_LIST.replace("{LANGUAGE}", language).replace(
      "{PAGE}",
      "1"
    );
  return {
    fullURL,
    options,
  };
}

export function getPopularTVList(language: string, country: string) {
  const fullURL =
    apiURL +
    URL.GET_POPULAR_TV_LIST.replace("{country}", country).replace(
      "{language}",
      language
    );
  return {
    fullURL,
    options,
  };
}

export function getPopularTVAnimationList() {
  const fullURL = apiURL + URL.GET_POPULAR_TV_ANIMATION_LIST;
  return {
    fullURL,
    options,
  };
}
