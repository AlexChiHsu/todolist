import React, { useState } from "react";
import {
  ContentContainer,
  MyWishListContainer,
} from "./styles/myWishListStyles";
import { MovieProp } from "../../types/movieList";
import { useAppSelector } from "../../app/hooks";
import Header from "./components/header";
import MovieListCard from "../../components/common/card/movieListCard";
import { useDevice } from "../../components/helper/media";

export default function MyWishList() {
  const [selected, setSelected] = useState("all");
  const data = useAppSelector((state) => state.user.userWishList);
  const filterData = data.filter(
    (item: MovieProp, index: number) =>
      item.id !== 0 &&
      item.id &&
      data.indexOf(
        data[data.map((i: MovieProp) => i.id).indexOf(item.id)] === index
      )
  );
  const device = useDevice(window.innerWidth);

  let cardContainerStyle = { width: 152, height: 226 };
  let cardImageStyle = { width: 152, height: 201 };

  switch (device) {
    case "pc":
      cardContainerStyle = { width: 152, height: 226 };
      cardImageStyle = { width: 152, height: 201 };
      break;
    case "tablet":
      cardContainerStyle = { width: 140, height: 215 };
      cardImageStyle = { width: 140, height: 168 };
      break;
    case "mobile":
      cardContainerStyle = { width: 103, height: 153 };
      cardImageStyle = { width: 103, height: 128 };
      break;
  }

  const cardItem = (item: MovieProp) => (
    <MovieListCard
      movie={item}
      type={item.type}
      cardContainerStyle={cardContainerStyle}
      cardImageStyle={cardImageStyle}
    />
  );

  return (
    <MyWishListContainer>
      <Header selected={selected} setSelected={setSelected} />
      <ContentContainer autoFillWidth={cardContainerStyle?.width}>
        {filterData.map((item: MovieProp) => (
          <>
            {selected === "all" && cardItem(item)}

            {selected === "movie" && item.type === "movie" && cardItem(item)}

            {selected === "tv" && item.type === "tv" && cardItem(item)}
          </>
        ))}
      </ContentContainer>
    </MyWishListContainer>
  );
}
