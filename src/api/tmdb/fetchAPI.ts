import { apiURL, headers } from "./commonURL";

const URL = {
  GET_POPULAR_MOVIE_LIST:
    "/movie/popular?language={LANGUAGE}&page={PAGE}&region=TW",
  GET_POPULAR_TV_LIST:
    "/discover/tv?include_adult=false&include_null_first_air_dates=false&language=zh-TW&page={PAGE}&sort_by=popularity.desc&with_origin_country={country}&with_original_language={language}",
  GET_POPULAR_TV_ANIMATION_LIST: "/discover/tv?with_genres=16",
  GET_MOVIE_TOP_RATED: "/movie/top_rated?language=zh-TW",
  GET_TV_TOP_RATED: "/tv/top_rated?language=zh-TW",
  GET_DETAIL: "/{TYPE}/{ID}?language=zh-TW",
  GET_CREDITS: "/{TYPE}/{ID}/credits?language=zh-TW",
  GET_COMMENTS: "/{TYPE}/{ID}/reviews?language=zh-TW&page=1",
  GET_SIMILAR: "/{TYPE}/{ID}/similar?language=zh-TW&page=1",
  GET_COMBINED_CREDITS: "/person/{ID}/combined_credits?language=zh-TW",
  GET_GENRE_LIST: "/genre/{TYPE}/list?language=zh",
  GET_TREND_LIST: "/trending/{TYPE}/day?language=zh-TW",
};
const options = {
  method: "GET",
  headers: headers,
};
export function getPopularMovieList(language: string, page: string) {
  const fullURL =
    apiURL +
    URL.GET_POPULAR_MOVIE_LIST.replace("{LANGUAGE}", language).replace(
      "{PAGE}",
      page
    );
  return {
    fullURL,
    options,
  };
}

export function getPopularTVList(
  language: string,
  country: string,
  page: string
) {
  const fullURL =
    apiURL +
    URL.GET_POPULAR_TV_LIST.replace("{country}", country)
      .replace("{language}", language)
      .replace("{PAGE}", page);
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

export function getMovieTopRated() {
  const fullURL = apiURL + URL.GET_MOVIE_TOP_RATED;
  return {
    fullURL,
    options,
  };
}

export function getTvTopRated() {
  const fullURL = apiURL + URL.GET_TV_TOP_RATED;
  return {
    fullURL,
    options,
  };
}

export function getDetail(id: string, type: string | undefined) {
  const fullURL =
    apiURL + URL.GET_DETAIL.replace("{TYPE}", type ?? "").replace("{ID}", id);
  return {
    fullURL,
    options,
  };
}

export function getCredits(id: string, type: string | undefined) {
  const fullURL =
    apiURL + URL.GET_CREDITS.replace("{TYPE}", type ?? "").replace("{ID}", id);
  return {
    fullURL,
    options,
  };
}

export function getComments(id: string, type: string | undefined) {
  const fullURL =
    apiURL + URL.GET_COMMENTS.replace("{TYPE}", type ?? "").replace("{ID}", id);
  return {
    fullURL,
    options,
  };
}

export function getSimilar(id: string, type: string | undefined) {
  const fullURL =
    apiURL + URL.GET_SIMILAR.replace("{TYPE}", type ?? "").replace("{ID}", id);
  return {
    fullURL,
    options,
  };
}

export function getCombinedCredits(id: string) {
  const fullURL = apiURL + URL.GET_COMBINED_CREDITS.replace("{ID}", id);
  return {
    fullURL,
    options,
  };
}

export function getGenreList(type: string) {
  const fullURL = apiURL + URL.GET_GENRE_LIST.replace("{TYPE}", type);
  return {
    fullURL,
    options,
  };
}

export function getTrendingList(type: string) {
  const fullURL = apiURL + URL.GET_TREND_LIST.replace("{TYPE}", type);
  return {
    fullURL,
    options,
  };
}
