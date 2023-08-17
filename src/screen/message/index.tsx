import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Button from "../../components/common/button";
import { useNavigate, useRouteError } from "react-router-dom";

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
const TextContainer = styled.div`
  max-width: 208px;
  ${tw`
    items-center
    justify-center
    text-white
    font-normal
    leading-6
    text-center
    whitespace-pre-line
  `}
  font-size: 16px;
`;
export default function Message() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log("error", error);
  return (
    <MessageContainer>
      <TextContainer>
        {`非常抱歉！ \n
        目前網路不穩或伺服器異常，\n
        請稍後再重新試試！`}
      </TextContainer>
      <Button
        isOpenBottomBar={false}
        onClick={() => navigate(`/`)}
        text="重新載入"
        isFill
      />
    </MessageContainer>
  );
}
