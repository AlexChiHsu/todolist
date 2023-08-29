import { Carousel } from "@material-tailwind/react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { MovieProp } from "../../types/movieList";
import CarouselCard from "./carouselCard";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";
import { fetchTrendingList } from "../../actions/movieListActions";

interface IDataProp {
  data: MovieProp[];
}

const DotContainer = styled.div`
  ${tw`
		w-full
		h-1.5
		flex
		flex-row
		justify-end
		pr-10
		absolute
		bottom-[120px]
		right-[40px]
	`}
`;
const Dot = styled.button<{ isOnPage?: boolean }>`
  ${tw`
		h-full
		w-[34px]
		bg-white
		rounded-full
		mr-2
	`}

  ${({ isOnPage }) =>
    !isOnPage &&
    css`
      width: 15px;
      background: #ffffff5e;
    `}
`;
export function CarouselCustomNavigation(props: IDataProp) {
  const { data } = props;
  const movieTrending = useAppSelector(
    (state) => state.movieList.movieTrendingList
  );
  const wishList = useAppSelector((state) => state.user.userWishList);
  const dispatch = useAppDispatch();
  const [type, setType] = useState("");
  useEffect(() => {
    dispatch(fetchTrendingList({ type: "movie", page: "1" }));
  }, [dispatch]);

  useEffect(() => {
    const movie = movieTrending.results.filter((i: { id: number }) =>
      data.map((item) => item.id === i.id)
    );
    if (movie) {
      setType("movie");
    } else {
      setType("tv");
    }
  }, [data, movieTrending.results]);

  const render = (item: MovieProp, type: string) => {
    const wishListId =
      wishList.find((i: { id: number }) => i.id === item.id)?.id.toString() ??
      "0";
    return <CarouselCard item={item} type={type} wishListId={wishListId} />;
  };
  return (
    <Carousel
      className="overflow-hidden whitespace-nowrap relative h-full w-full"
      autoplay
      loop
      autoplayDelay={3000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <DotContainer>
          {new Array(length).fill("").map((_, i) => (
            <Dot isOnPage={activeIndex === i} />
          ))}
        </DotContainer>
      )}
    >
      {data.map((item) => render(item, type))}
    </Carousel>
  );
}
