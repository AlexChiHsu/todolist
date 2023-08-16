import React from "react";
import {
  BgImage,
  CastCardButton,
  Name,
} from "../../../screen/detail/styles/castComponent";
import path from "path";

interface ICastCardProp {
  path: string;
  name: string;
}
export default function CastCard(props: ICastCardProp) {
  const { path, name } = props;
  return (
    <CastCardButton>
      <BgImage path={path} />
      <Name>{name}</Name>
    </CastCardButton>
  );
}
