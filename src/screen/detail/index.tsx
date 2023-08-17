import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { styled } from "styled-components";
import tw from "twin.macro";
import Poster from "./component/poster";
import CastComponent from "./component/castComponent";
import Comment from "./component/comment";
import {
  fetchDetail,
  fetchCredits,
  fetchSimilar,
} from "../../reducers/detailReducers";
import MovieList from "../movieList";

const DetailContainer = styled.div`
  ${tw`
    h-full
    w-full
    pt-6
    pr-[42px]
    pl-[42px]
    overflow-auto
  `}
`;

export default function Detail() {
  const param = useParams();
  const dispatch = useAppDispatch();
  const id = param.detailId + "";
  const type = param?.type;
  const similar = useAppSelector((state) => state.detail.similar);

  useEffect(() => {
    dispatch(fetchDetail({ id: id, type: type }));
    dispatch(fetchCredits({ id: id, type: type }));
    dispatch(fetchSimilar({ id: id, type: type }));
  }, [dispatch, id, param.detailId, type]);

  return (
    <DetailContainer>
      <Poster />
      <CastComponent />
      <Comment />
      <MovieList
        listTitle={"相關影片"}
        data={similar}
        isShowBg={false}
        isDetail={true}
      />
    </DetailContainer>
  );
}
