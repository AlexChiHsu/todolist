import React from "react";
import {
  BottomBarContainer,
  BottomBarItemButton,
} from "../styles/bottomBarStyles";
import Icon from "../../common/icons/icon";
import Thumbnail from "./thumbnail";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { fetchGenreList } from "../../../actions/movieListActions";

export default function BottomBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <BottomBarContainer>
      <BottomBarItemButton
        onClick={() => {
          navigate("/movie");
          dispatch(fetchGenreList("movie"));
        }}
      >
        <Icon name={"movie"} width={24} />
        電影
      </BottomBarItemButton>
      <BottomBarItemButton
        onClick={() => {
          navigate("/tv");
          dispatch(fetchGenreList("tv"));
        }}
      >
        <Icon name={"tv"} width={24} />
        影集
      </BottomBarItemButton>
      <BottomBarItemButton
        onClick={() => {
          navigate("/collection");
        }}
      >
        <Icon name={"collection"} width={24} />
        主題館
      </BottomBarItemButton>
      <BottomBarItemButton>
        <Icon name={"favorite"} width={24} />
        我的片單
      </BottomBarItemButton>
      <BottomBarItemButton>
        <Thumbnail />
      </BottomBarItemButton>
    </BottomBarContainer>
  );
}
