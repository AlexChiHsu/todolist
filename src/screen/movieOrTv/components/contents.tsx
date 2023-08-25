import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  ContentsContainer,
  LoadMoreButton,
  LoadMoreContainer,
} from "../styles/contentsStyles";
import MovieListCard from "../../../components/common/card/movieListCard";
import { MovieListProp } from "../../../types/movieList";
import { fetchTrendingList } from "../../../actions/movieListActions";
import { useParams } from "react-router-dom";

interface ContentProp {
  data: MovieListProp[];
  isLoadFirst: boolean;
  setIsLoadFirst: Function;
  isLoading: boolean;
  setIsLoading: Function;
}

export default function Contents(props: ContentProp) {
  const { data, isLoadFirst, setIsLoadFirst, isLoading, setIsLoading } = props;
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(2);
  const width = useRef<HTMLDivElement>(null);
  const param = useParams();
  const [allData, setAllData] = useState<MovieListProp[]>(data);

  const onClick = () => {
    // setLoadFirst(false);
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoadFirst) {
      if (page < 2) {
        setPage((v) => v + 1);
      }
    } else {
      if (isLoading) {
        setPage((v) => v + 1);
      }
      setIsLoading(false);
    }
  }, [isLoading, isLoadFirst, page, setIsLoading]);

  useEffect(() => {
    const cookData = allData;
    if (isLoadFirst) {
      setIsLoadFirst(false);
    } else {
      dispatch(fetchTrendingList({ type: param.type + "", page: page + "" }))
        .unwrap()
        .then((res) => cookData?.push(res));
    }
    setAllData(cookData);
    return;
  }, [allData, dispatch, isLoadFirst, page, param, setIsLoadFirst]);

  const filterData = allData.filter(
    (item, index) =>
      allData.indexOf(
        allData[allData.map((i) => i.page).indexOf(item.page)]
      ) === index
  );
  return (
    <>
      <ContentsContainer ref={width}>
        {filterData.map(
          (item) =>
            item.json !== null &&
            item.results?.map((i) => (
              <MovieListCard
                movie={i}
                type={param.type + ""}
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
