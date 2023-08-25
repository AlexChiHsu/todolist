import React, { useEffect, useState } from "react";
import { MovieContainer } from "./styles/movieStyles";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
import Contents from "./components/contents";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTrendingList } from "../../actions/movieListActions";

export default function Movie() {
  const param = useParams();
  const movieData = useAppSelector(
    (state) => state.movieList.movieTrendingList
  );
  const tvData = useAppSelector((state) => state.movieList.tvTrendingList);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadFirst, setIsLoadFirst] = useState(true);

  useEffect(() => {
    dispatch(fetchTrendingList({ type: param.type + "", page: "1" }));
  }, [dispatch, param.type]);

  return (
    <MovieContainer>
      <Header />
      <SubHeader />
      {param.type === "movie" && (
        <Contents
          data={[movieData]}
          isLoadFirst={isLoadFirst}
          setIsLoadFirst={setIsLoadFirst}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}

      {param.type === "tv" && (
        <Contents
          data={[tvData]}
          isLoadFirst={isLoadFirst}
          setIsLoadFirst={setIsLoadFirst}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}
    </MovieContainer>
  );
}
