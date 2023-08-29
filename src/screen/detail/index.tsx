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
  fetchComments,
} from "../../actions/detailActions";
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
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  overflow: auto;
`;

export default function Detail() {
  const param = useParams();
  const dispatch = useAppDispatch();
  const id = param.detailId + "";
  const type = param?.type;
  const similar = useAppSelector((state) => state.detail.similar);
  const fetch = { id: id, type: type };

  useEffect(() => {
    dispatch(fetchDetail(fetch));
    dispatch(fetchCredits(fetch));
    dispatch(fetchSimilar(fetch));
    dispatch(fetchComments(fetch));
  }, []);

  return (
    <DetailContainer>
      <Poster type={type + ""} />
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
