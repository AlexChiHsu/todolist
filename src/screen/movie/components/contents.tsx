import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ContentsContainer } from "../styles/contentsStyles";
import MovieListCard from "../../../components/common/card/movieListCard";
import { MovieListProp, MovieProp } from "../../../types/movieList";
import { fetchPopularMovieList } from "../../../actions/movieListActions";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../components/common/screen";
import { useDevice } from "../../../components/helper/media";

export default function Contents() {
  const dispatch = useAppDispatch();
  const movieData = useAppSelector((state) => state.movieList.data);
  const [page, setPage] = useState(2);
  const [device, setDevice] = useState("");
  const [allData, setAllData] = useState<MovieListProp[]>([movieData]);
  const width = useRef<HTMLDivElement>(null);
  const deviceType = useDevice(width.current?.offsetWidth ?? 1025);

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

  useEffect(() => {
    setDevice(deviceType);
  }, [deviceType]);

  return (
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
      {/* {movieData.results?.map((item) => (
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
      ))} */}
    </ContentsContainer>
  );
}
