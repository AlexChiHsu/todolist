import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { styled } from "styled-components";
import tw from "twin.macro";
import Poster from "./component/poster";
import { fetchCredits, fetchDetail } from "../../reducers/tvListsReducers";

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
  const type = param?.type;

  console.log(type);
  useEffect(() => {
    dispatch(fetchDetail({ id: id, type: type }));
    dispatch(fetchCredits({ id: id, type: type }));
  }, [dispatch, id, param.detailId, type]);

  return (
    <DetailContainer>
      <Poster />
    </DetailContainer>
  );
}
