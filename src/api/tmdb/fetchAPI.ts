import { apiURL, headers } from "./commonURL";

const URL = {
  GET_POPULAR_MOVIE_LIST: "/movie/popular?language={LANGUAGE}&page={PAGE}",
};
export function getPopularMovieList() {
  const options = {
    method: "GET",
    headers: headers,
  };

  const fullURL =
    apiURL +
    URL.GET_POPULAR_MOVIE_LIST.replace("{LANGUAGE}", "zh-TW").replace(
      "{PAGE}",
      "1"
    );
  return {
    fullURL,
    options,
  };
}
