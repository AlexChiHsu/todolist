import React from "react";
import { ListsButton, SubHeaderContainer } from "../styles/subHeaderStyles";

export default function SubHeader() {
  return (
    <SubHeaderContainer>
      <ListsButton>評分</ListsButton>
      <ListsButton>人氣</ListsButton>
      <ListsButton>上映日</ListsButton>
      <ListsButton>片名</ListsButton>
    </SubHeaderContainer>
  );
}
