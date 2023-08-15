import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import {
  fetchMovieCredits,
  fetchMovieDetail,
} from "../../reducers/movieListReducers";
import { fetchTVCredits, fetchTVDetail } from "../../reducers/tvListsReducers";
import { styled } from "styled-components";
import tw from "twin.macro";
import Poster from "./component/poster";

const DetailContainer = styled.div`
  ${tw`
    h-full
    w-full
  `}
`;

export default function Detail() {
  const param = useParams();
  const dispatch = useAppDispatch();
  const id = param.detailId + "";
  useEffect(() => {
    dispatch(fetchMovieDetail(id));
    dispatch(fetchTVDetail(id));
    dispatch(fetchTVCredits(id));
    dispatch(fetchMovieCredits(id));
  }, [dispatch, param.detailId]);

  return (
    <DetailContainer>
      <Poster />
    </DetailContainer>
  );
}
