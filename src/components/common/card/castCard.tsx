import React from "react";
import {
  BgImage,
  CastCardButton,
  Name,
} from "../../../screen/detail/styles/castComponent";
import Icon from "../icons/icon";
import { useDispatch } from "react-redux";
import { fetchCombinedCredits } from "../../../actions/detailActions";
import { useAppDispatch } from "../../../app/hooks";
import { useNavigate, useNavigation } from "react-router-dom";

interface ICastCardProp {
  path: string;
  name: string;
  id: number;
}
export default function CastCard(props: ICastCardProp) {
  const { path, name, id } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onClick = () => {
    dispatch(fetchCombinedCredits({ id: id + "" }));
    navigate("/person/combined-credits", { state: { name: name } });
  };
  return (
    <CastCardButton onClick={onClick}>
      {path !== "" ? <BgImage path={path} /> : <Icon name={"non-person"} />}
      <Name>{name}</Name>
    </CastCardButton>
  );
}
