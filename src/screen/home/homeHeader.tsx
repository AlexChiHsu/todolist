import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { fetchTopRatedMovieList } from "../../reducers/movieListReducers";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchTopRatedTVList } from "../../reducers/tvListsReducers";
import { imageURL } from "../../api/tmdb/commonURL";
import { CarouselCustomNavigation } from "./carousel";

const HomeHeaderContainer = styled.div`
  min-height: 720px;
  ${tw`
		w-full
		h-full
    overflow-hidden
    whitespace-nowrap
	`}
  z-index: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;

export default function HomeHeader() {
  const movieTopRated = useAppSelector((state) => state.movieList.topRatedData);
  const { topRatedData } = useAppSelector((state) => state.tvLists);
  const dispatch = useAppDispatch();
  const allData = movieTopRated.results
    .concat(topRatedData.results)
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 10);

  useEffect(() => {
    dispatch(fetchTopRatedMovieList());
    dispatch(fetchTopRatedTVList());
  }, [dispatch]);
  return (
    <HomeHeaderContainer>
      <CarouselCustomNavigation data={allData} />
    </HomeHeaderContainer>
  );
}
