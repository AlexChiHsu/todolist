import React from "react";
import { MyWishListContainer } from "./styles/myWishListStyles";
import { MovieProp } from "../../types/movieList";
import { useAppSelector } from "../../app/hooks";

export default function MyWishList() {
  const data = useAppSelector((state) => state.user.userWishList);
  const filterData = data.filter(
    (item: MovieProp, index: number) =>
      item.id !== 0 &&
      item.id &&
      data.indexOf(
        data[data.map((i: MovieProp) => i.id).indexOf(item.id)] === index
      )
  );

  // const filterData = allData.filter(
  //   (item, index) =>
  //     allData.indexOf(
  //       allData[allData.map((i) => i.page).indexOf(item.page)]
  //     ) === index
  // );

  return (
    <MyWishListContainer>{JSON.stringify(filterData)}</MyWishListContainer>
  );
}
