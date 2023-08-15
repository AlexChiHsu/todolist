import { styled } from "styled-components";
import tw from "twin.macro";
import MovieList from "../movieList";
import { lists } from "../../components/common/list";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";
import { fetchPopularMovieList } from "../../reducers/movieListReducers";
import {
  fetchPopularTVListUs,
  fetchPopularTVListKr,
  fetchPopularTVListZh,
  fetchPopularTVAnimationList,
} from "../../reducers/tvListsReducers";
import Footer from "./footer";
import HomeHeader from "./homeHeader";

const HomeContainer = styled.div`
  ${tw`
    w-full
    h-full
    items-center
  `}
`;

const MovieContainer = styled.div`
  ${tw`
    w-full
    h-full
    relative
    -top-40
    z-10
  `}
`;

function HomeScreen() {
  const dispatch = useAppDispatch();
  const movieData = useAppSelector((state) => state.movieList.data);
  const { usData, zhData, krData, aniData } = useAppSelector(
    (state) => state.tvLists
  );

  useEffect(() => {
    dispatch(fetchPopularTVListUs({ language: "en", country: "US" }));
    dispatch(fetchPopularTVListKr({ language: "ko", country: "KR" }));
    dispatch(fetchPopularTVListZh({ language: "zh", country: "CN" }));
    dispatch(fetchPopularTVAnimationList());
    dispatch(fetchPopularMovieList("zh-TW"));
  }, [dispatch]);

  const data = (title: string) => {
    switch (title) {
      case "熱門美劇":
        return usData;
      case "熱門韓劇":
        return krData;
      case "熱門陸劇、台劇":
        return zhData;
      case "熱門動畫":
        return aniData;
      default:
        return movieData;
    }
  };
  return (
    <>
      <HomeContainer>
        <HomeHeader />
        <MovieContainer>
          {lists.map((item, index) => (
            <MovieList
              listTitle={item.title}
              data={data(item.title)}
              isShowBg={index % 2 !== 1}
            />
          ))}
          <Footer />
        </MovieContainer>
      </HomeContainer>
    </>
  );
}

export default HomeScreen;
