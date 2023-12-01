import React, { useState } from "react";
import {
  BottomBarContainer,
  BottomBarItemButton,
} from "../styles/bottomBarStyles";
import Icon from "../../common/icons/icon";
import Thumbnail from "./thumbnail";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { fetchGenreList } from "../../../actions/movieListActions";
import Label from "./label";

interface BottomBarProp {
  isSelected: string;
  setIsSelected: Function;
  openLogin: boolean;
  setOpenLogin: Function;
}

export default function BottomBar(props: BottomBarProp) {
  const { isSelected, setIsSelected, setOpenLogin, openLogin } = props;
  const [isShowLabel, setIsShowLabel] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <BottomBarContainer>
        <BottomBarItemButton
          isSelected={isSelected === "movie"}
          onClick={() => {
            navigate("/movie");
            dispatch(fetchGenreList("movie"));
            setIsSelected("movie");
          }}
        >
          <Icon
            name={"movie"}
            width={24}
            fill={isSelected === "movie" ? "#C10171" : "#686B72"}
          />
          電影
        </BottomBarItemButton>
        <BottomBarItemButton
          isSelected={isSelected === "tv"}
          onClick={() => {
            navigate("/tv");
            dispatch(fetchGenreList("tv"));
            setIsSelected("tv");
          }}
        >
          <Icon
            name={"tv"}
            width={24}
            fill={isSelected === "tv" ? "#C10171" : "#686B72"}
          />
          影集
        </BottomBarItemButton>
        <BottomBarItemButton
          isSelected={isSelected === "collection"}
          onClick={() => {
            navigate("/collection");
            setIsSelected("collection");
          }}
        >
          <Icon
            name={"collection"}
            width={24}
            fill={isSelected === "collection" ? "#C10171" : "#686B72"}
          />
          主題館
        </BottomBarItemButton>
        <BottomBarItemButton
          onClick={() => {
            navigate("/myWishList");
            setIsSelected("myWishList");
          }}
          isSelected={isSelected === "myWishList"}
        >
          <Icon
            name={"favorite"}
            width={24}
            fill={isSelected === "myWishList" ? "#C10171" : "#686B72"}
          />
          我的片單
        </BottomBarItemButton>
        <BottomBarItemButton
          onClick={() => {
            setIsSelected("user");
            setIsShowLabel(!isShowLabel);
          }}
        >
          <Thumbnail />
        </BottomBarItemButton>
      </BottomBarContainer>
      {isShowLabel && (
        <Label
          setIsShowLabel={setIsShowLabel}
          openLogin={openLogin}
          setOpenLogin={setOpenLogin}
        />
      )}
    </>
  );
}
