import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Text from "../../components/common/text";
import Button from "../../components/common/button";
import { useRouteError } from "react-router-dom";

const MessageContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
    items-center
    mt-96
  `}
`;

export default function Message() {
  const error = useRouteError();
  console.log("error", error);
  return (
    <MessageContainer>
      <Text
        text={`非常抱歉！ \n
        目前網路不穩或伺服器異常，\n
        請稍後再重新試試！`}
      />
      <Button
        isOpenBottomBar={false}
        onClick={() => {}}
        text="重新載入"
        isFill
      />
    </MessageContainer>
  );
}
