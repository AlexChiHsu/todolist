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
  const [selectedType, setSelectedType] = useState("全部");
  const [selectedYear, setSelectedYear] = useState("全部");
  const [selectedTrending, setSelectedTrending] = useState("人氣");

  useEffect(() => {
    dispatch(fetchTrendingList({ type: param.type + "", page: "1" }));
  }, [dispatch, param.type]);

  return (
    <MovieContainer>
      <Header
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      <SubHeader
        selectedTrending={selectedTrending}
        setSelectedTrending={setSelectedTrending}
      />
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
