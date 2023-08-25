import React from "react";
import { ListsButton, SubHeaderContainer } from "../styles/subHeaderStyles";

interface SubHeaderProp {
  selectedTrending: string;
  setSelectedTrending: Function;
}
export default function SubHeader(props: SubHeaderProp) {
  const { selectedTrending, setSelectedTrending } = props;
  return (
    <SubHeaderContainer>
      <ListsButton
        focus={selectedTrending === "評分"}
        onClick={() => setSelectedTrending("評分")}
      >
        評分
      </ListsButton>
      <ListsButton
        focus={selectedTrending === "人氣"}
        onClick={() => setSelectedTrending("人氣")}
      >
        人氣
      </ListsButton>
      <ListsButton
        focus={selectedTrending === "上映日"}
        onClick={() => setSelectedTrending("上映日")}
      >
        上映日
      </ListsButton>
      <ListsButton
        focus={selectedTrending === "片名"}
        onClick={() => setSelectedTrending("片名")}
      >
        片名
      </ListsButton>
    </SubHeaderContainer>
  );
}
