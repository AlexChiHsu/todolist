import React from "react";
import { HeaderButton, SearchHeaderContainer } from "../styles/searchStyles";

interface IHeaderProp {
  setSelected: Function;
  selected: string;
}

export default function Header(props: IHeaderProp) {
  const { setSelected, selected } = props;
  const button = [{ title: "片名" }, { title: "人物" }];

  const onClick = (title: string) => {
    setSelected(title);
  };
  return (
    <SearchHeaderContainer>
      {button.map((item) => (
        <HeaderButton
          isSelected={selected === item.title}
          onClick={() => onClick(item.title)}
        >
          {item.title}
        </HeaderButton>
      ))}
    </SearchHeaderContainer>
  );
}
