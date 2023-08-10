import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchPopularMovieList } from "../../reducers/movieList";
import MovieListCard from "../../components/common/card/movieListCard";

export default function MovieList() {
  const { data } = useAppSelector((state) => state.movieList);
  const popularMovieListDispatch = useAppDispatch();
  useEffect(() => {
    popularMovieListDispatch(fetchPopularMovieList());
  }, [popularMovieListDispatch]);

  return <MovieListCard {...data} />;
}
