import React from "react";
import {
  BottomBarContainer,
  BottomBarItemButton,
} from "../styles/bottomBarStyles";
import Icon from "../../common/icons/icon";
import Thumbnail from "./thumbnail";

export default function BottomBar() {
  return (
    <BottomBarContainer>
      <BottomBarItemButton>
        <Icon name={"movie"} width={24} />
        電影
      </BottomBarItemButton>
      <BottomBarItemButton>
        <Icon name={"tv"} width={24} />
        影集
      </BottomBarItemButton>
      <BottomBarItemButton>
        <Icon name={"collection"} width={24} />
        主題館
      </BottomBarItemButton>
      <BottomBarItemButton>
        <Icon name={"favorite"} width={24} />
        我的片單
      </BottomBarItemButton>
      <BottomBarItemButton>
        <Thumbnail isLogin={true} />
      </BottomBarItemButton>
    </BottomBarContainer>
  );
}
