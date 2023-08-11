import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchPopularMovieList } from "../../reducers/movieList";
import MovieListCard from "../../components/common/card/movieListCard";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../../components/common/icons/icon";

const MovieListContainer = styled.div`
  ${tw`
    w-full
    h-[350px]
    items-center
    flex
    flex-row
    justify-center
    overflow-hidden
    ml-10
    mr-10
    pl-[26px]
    pr-[26px]
    rounded-[20px]
    gap-3.5
    bg-[#686B721A]
  `}
`;

const IconBackground = styled.button`
  ${tw`
    h-[50px]
    flex
    items-center
    justify-center
    rounded-[13px]
    pr-0.5
    bg-[#686B721A]
  `}
`;

const ScrollContainer = styled.div`
  ${tw`
    w-full
    overflow-hidden
    box-border
    h-[260px]
    flex
    items-center
    mr-2.5
    ml-2.5
  `}
`;

const ScrollList = styled.div`
  ${tw`
    flex
    items-center
    h-[260px]
    overflow-x-scroll
    overflow-y-hidden
    whitespace-nowrap
    pt-2.5
    pb-2.5
    pr-2.5
    pl-2.5
  `}
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;
export default function MovieList() {
  const { data } = useAppSelector((state) => state.movieList);
  const popularMovieListDispatch = useAppDispatch();
  useEffect(() => {
    popularMovieListDispatch(fetchPopularMovieList());
  }, [popularMovieListDispatch]);

  return (
    <MovieListContainer>
      <IconBackground>
        <Icon name={"arrowLeft"} fill="white" width={48} height={27} />
      </IconBackground>
      <ScrollContainer>
        <ScrollList>
          {data.results.map((item) => (
            <MovieListCard {...item} />
          ))}
        </ScrollList>
      </ScrollContainer>
      <IconBackground>
        <Icon name={"arrowRight"} fill="white" width={48} height={27} />
      </IconBackground>
    </MovieListContainer>
  );
}
