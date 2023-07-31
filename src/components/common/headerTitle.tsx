import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "./button";

export interface IHeadetTitleProp {
  title: string;
}

const HeaderTitleContainer = styled.div`
  ${tw`

  `}
`;

function HeaderTitle(props: IHeadetTitleProp) {
  const { title } = props;
  return (
    <HeaderTitleContainer>
      {title}
      <Button isFill text={"新增"} onClick={() => {}} />
    </HeaderTitleContainer>
  );
}

export default HeaderTitle;
