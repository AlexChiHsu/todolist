import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ContentsContainer } from "../styles/contentsStyles";
import MovieListCard from "../../../components/common/card/movieListCard";
import { MovieListProp, MovieProp } from "../../../types/movieList";
import { fetchPopularMovieList } from "../../../actions/movieListActions";

export default function Contents() {
  const dispatch = useAppDispatch();
  const movieData = useAppSelector((state) => state.movieList.data);
  const [page, setPage] = useState(2);
  const [allData, setAllData] = useState<MovieListProp[]>([movieData]);
  // const allData = movieData;

  useEffect(() => {
    if (page < 2) {
      setPage((v) => v + 1);
    }
  }, [page]);

  useEffect(() => {
    const cookData = allData;
    dispatch(fetchPopularMovieList({ language: "zh-TW", page: page + "" }))
      .unwrap()
      .then((res) => cookData?.push(res));
    setAllData(cookData);
  }, [allData, dispatch, page]);

  console.log(JSON.stringify(allData));

  return (
    <ContentsContainer>
      {movieData.results?.map((item) => (
        <MovieListCard
          movie={item}
          type={"movie"}
          cardContainerStyle={{
            width: 140,
            height: 215,
            marginBottom: 28,
          }}
          cardImageStyle={{
            width: 140,
            height: 190,
          }}
        />
      ))}
    </ContentsContainer>
  );
}
