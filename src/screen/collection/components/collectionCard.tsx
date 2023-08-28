import React from "react";
import {
  CollectionCardButton,
  CollectionCardContainer,
} from "../styles/collectionStyles";
import { useAppDispatch } from "../../../app/hooks";
import { fetchCollectionMovieList } from "../../../actions/movieListActions";
import { useNavigate } from "react-router-dom";

interface CollectionCardProp {
  image: string;
  title: string;
  genres: string[];
  country: string;
  url: string;
  id: string;
}

export default function CollectionCard(props: CollectionCardProp) {
  const { image, title, genres, country, url, id } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClick = () => {
    if (genres.length > 0) {
      const genreStr = genres.map((item, index) => {
        if (genres.length > 1 && index !== genres.length - 1) {
          return item + "%2C";
        } else {
          return item;
        }
      });
      dispatch(fetchCollectionMovieList({ page: "1", genres: `${genreStr}` }));
      navigate(`/movie/${id}`);
    }

    if (url !== "") {
      window.open(url);
    }
  };
  return (
    <CollectionCardContainer path={image}>
      <CollectionCardButton onClick={onClick}>{title}</CollectionCardButton>
    </CollectionCardContainer>
  );
}
