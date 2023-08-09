import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../common/button";

const LabelContainer = styled.div`
  height: 66;
  width: 103;
  ${tw`
    rounded-2xl
    p-2.5
    flex
    absolute
    right-8
    top-16
  `}

  background-color: #161616;
`;
export default function Label() {
  return (
    <LabelContainer>
      <Button
        isOpenBottomBar={false}
        onClick={() => {}}
        text="登出"
        css={{ border: "none" }}
      />
    </LabelContainer>
  );
}
