import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { ContentContainer, SearchListContainer } from "./styles/searchStyles";
import Header from "./components/header";
import MovieListCard from "../../components/common/card/movieListCard";
import { imagePath, useDevice } from "../../components/helper/media";
import CastCard from "../../components/common/card/castCard";
import { PersonResultsProp } from "../../types/credits";
import { MovieProp } from "../../types/movieList";

export default function Search() {
  const searchPersonList = useAppSelector(
    (state) => state.search.searchPersonList
  );
  const movieList = useAppSelector((state) => state.search.searchMovieList);

  const tvList = useAppSelector((state) => state.search.searchTvList);
  const [selected, setSelected] = useState("片名");
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
  const allData = movieList.results.concat(tvList.results);
  return (
    <SearchListContainer>
      <Header selected={selected} setSelected={setSelected} />
      <ContentContainer autoFillWidth={cardContainerStyle?.width}>
        {selected === "片名" ? (
          <>
            {allData.map((item: MovieProp) => (
              <MovieListCard
                movie={item}
                type={item.type}
                cardContainerStyle={cardContainerStyle}
                cardImageStyle={cardImageStyle}
              />
            ))}
          </>
        ) : (
          <>
            {searchPersonList.results.map((item: PersonResultsProp) => (
              <CastCard
                path={
                  item.profile_path !== null ? imagePath(item.profile_path) : ""
                }
                name={item.name}
                id={item.id}
              />
            ))}
          </>
        )}
      </ContentContainer>
    </SearchListContainer>
  );
}
