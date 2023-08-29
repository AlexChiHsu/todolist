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
          isSelected={isSelected === "電影"}
          onClick={() => {
            navigate("/movie");
            dispatch(fetchGenreList("movie"));
            setIsSelected("電影");
          }}
        >
          <Icon
            name={"movie"}
            width={24}
            fill={isSelected === "電影" ? "#C10171" : "#686B72"}
          />
          電影
        </BottomBarItemButton>
        <BottomBarItemButton
          isSelected={isSelected === "影集"}
          onClick={() => {
            navigate("/tv");
            dispatch(fetchGenreList("tv"));
            setIsSelected("影集");
          }}
        >
          <Icon
            name={"tv"}
            width={24}
            fill={isSelected === "影集" ? "#C10171" : "#686B72"}
          />
          影集
        </BottomBarItemButton>
        <BottomBarItemButton
          isSelected={isSelected === "主題館"}
          onClick={() => {
            navigate("/collection");
            setIsSelected("主題館");
          }}
        >
          <Icon
            name={"collection"}
            width={24}
            fill={isSelected === "主題館" ? "#C10171" : "#686B72"}
          />
          主題館
        </BottomBarItemButton>
        <BottomBarItemButton
          onClick={() => {
            navigate("/myWishList");
            setIsSelected("我的片單");
          }}
          isSelected={isSelected === "我的片單"}
        >
          <Icon
            name={"favorite"}
            width={24}
            fill={isSelected === "我的片單" ? "#C10171" : "#686B72"}
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
