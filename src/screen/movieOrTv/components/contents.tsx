import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  ContentsContainer,
  LoadMoreButton,
  LoadMoreContainer,
} from "../styles/contentsStyles";
import MovieListCard from "../../../components/common/card/movieListCard";
import { MovieListProp } from "../../../types/movieList";
import { fetchPopularMovieList } from "../../../actions/movieListActions";

export default function Contents() {
  const dispatch = useAppDispatch();
  const [loadFirst, setLoadFirst] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const movieData = useAppSelector((state) => state.movieList.data);
  const [page, setPage] = useState(2);
  const [allData, setAllData] = useState<MovieListProp[]>([movieData]);
  const width = useRef<HTMLDivElement>(null);

  const onClick = () => {
    // setLoadFirst(false);
    setIsLoading(true);
  };

  useEffect(() => {
    if (loadFirst) {
      if (page < 2) {
        setPage((v) => v + 1);
      }
    } else {
      if (isLoading) {
        setPage((v) => v + 1);
      }
      setIsLoading(false);
    }
  }, [isLoading, loadFirst, page]);

  useEffect(() => {
    const cookData = allData;
    if (loadFirst) {
      setLoadFirst(false);
    } else {
      dispatch(fetchPopularMovieList({ language: "zh-TW", page: page + "" }))
        .unwrap()
        .then((res) => cookData?.push(res));
    }
    setAllData(cookData);
  }, [allData, dispatch, loadFirst, page]);

  return (
    <>
      <ContentsContainer ref={width}>
        {allData.map((item) =>
          item.results.map((i) => (
            <MovieListCard
              movie={i}
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
          ))
        )}
      </ContentsContainer>
      {!isLoading && (
        <LoadMoreContainer>
          <LoadMoreButton onClick={onClick}>載入更多</LoadMoreButton>
        </LoadMoreContainer>
      )}
    </>
  );
}
