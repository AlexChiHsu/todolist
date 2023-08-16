import React from "react";
import {
  BgImage,
  CastCardButton,
  Name,
} from "../../../screen/detail/styles/castComponent";
import Icon from "../icons/icon";

interface ICastCardProp {
  path: string;
  name: string;
}
export default function CastCard(props: ICastCardProp) {
  const { path, name } = props;
  return (
    <CastCardButton>
      {path !== "" ? <BgImage path={path} /> : <Icon name={"non-person"} />}
      <Name>{name}</Name>
    </CastCardButton>
  );
}
