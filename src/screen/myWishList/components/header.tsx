import React from "react";
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
  const button = [{ title: "全部" }, { title: "電影" }, { title: "戲劇" }];

  const onClick = (title: string) => {
    setSelected(title);
  };
  return (
    <WishListHeaderContainer>
      {button.map((item) => (
        <HeaderButton
          isSelected={selected === item.title}
          onClick={() => onClick(item.title)}
        >
          {item.title}
        </HeaderButton>
      ))}
    </WishListHeaderContainer>
  );
}
