import { Carousel } from "@material-tailwind/react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { MovieProp } from "../../types/movieList";
import CarouselCard from "./carouselCard";

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
      {data.map((item) => (
        <CarouselCard item={item} />
      ))}
    </Carousel>
  );
}
