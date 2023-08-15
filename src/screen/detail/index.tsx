import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { fetchMovieDetail } from "../../reducers/movieListReducers";
import { fetchTVDetail } from "../../reducers/tvListsReducers";
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
  useEffect(() => {
    dispatch(fetchMovieDetail(param.detailId + ""));
    dispatch(fetchTVDetail(param.detailId + ""));
  }, [dispatch, param.detailId]);

  return (
    <DetailContainer>
      <Poster />
    </DetailContainer>
  );
}
