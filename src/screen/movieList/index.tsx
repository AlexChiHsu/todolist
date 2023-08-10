import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchPopularMovieList } from "../../reducers/movieList";
import MovieListCard from "../../components/common/card/movieListCard";
import { styled } from "styled-components";
import tw from "twin.macro";

const MovieListContainer = styled.div`
  ${tw`
    w-full
    h-[350px]
    items-center
    flex
    overflow-auto
    whitespace-nowrap
    ml-10
    mr-10
    pl-10
    pr-10
    rounded-[20px]
    gap-3.5
  `}
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
  background: rgba(104, 107, 114, 0.1);
`;
export default function MovieList() {
  const { data } = useAppSelector((state) => state.movieList);
  const popularMovieListDispatch = useAppDispatch();
  useEffect(() => {
    popularMovieListDispatch(fetchPopularMovieList());
  }, [popularMovieListDispatch]);

  return (
    <MovieListContainer>
      {data.results.map((item) => (
        <MovieListCard {...item} />
      ))}
    </MovieListContainer>
  );
}
