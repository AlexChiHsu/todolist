import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "./button";
import Marginer from "../marginer";
import Icon from "./icons/icon";
import Dividing from "../dividing";
import IconButton from "./button/iconButton";

export interface IHeadetTitleProp {
  title: string;
}

const HeaderTitleContainer = styled.div`
  ${tw`
    flex
    justify-between
    items-center
    pl-1
    pr-1
  `}
`;

const RightContainer = styled.div`
  ${tw`
    flex
    flex-row
    items-center
    justify-between
    relative
    right-0
    top-2.5
  `}
`;

function HeaderTitle(props: IHeadetTitleProp) {
  const { title } = props;
  return (
    <HeaderTitleContainer>
      {title}
      <RightContainer>
        <Button
          isFill
          text={"新增"}
          onClick={() => {}}
          component={
            <Icon name="arrowDown" stroke="white" width={18} height={18} />
          }
        />
        <Dividing direction="vertical" dividing={"1em"} lineLength={"1.5em"} />
        <IconButton
          onClick={() => {}}
          component={
            <Icon name="rectangleGroup" stroke="black" width={24} height={24} />
          }
        />
      </RightContainer>
    </HeaderTitleContainer>
  );
}

export default HeaderTitle;
