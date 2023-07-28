import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface IHeadetTitleProp {
  title: string;
}

const HeaderTitleContainer = styled.div`
  ${tw`

  `}
`;

function HeaderTitle(props: IHeadetTitleProp) {
  const { title } = props;
  return <HeaderTitleContainer>{title}</HeaderTitleContainer>;
}

export default HeaderTitle;
