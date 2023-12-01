import React, { useState } from "react";
import {
  HeaderButton,
  WishListHeaderContainer,
} from "../styles/myWishListStyles";

interface IHeaderProp {
  setSelected: Function;
  selected: string;
}

export default function Header(props: IHeaderProp) {
  const { setSelected, selected } = props;
  const button = [{ title: "all" }, { title: "movie" }, { title: "tv" }];

  const onClick = (title: string) => {
    setSelected(title);
  };

  const getTitle = (buttonTitle: string) => {
    switch (buttonTitle) {
      case "all":
        return "全部";
      case "movie":
        return "電影";
      case "tv":
        return "戲劇";
    }
  };
  return (
    <WishListHeaderContainer>
      {button.map((item) => (
        <HeaderButton
          isSelected={selected === item.title}
          onClick={() => onClick(item.title)}
        >
          {getTitle(item.title)}
        </HeaderButton>
      ))}
    </WishListHeaderContainer>
  );
}
