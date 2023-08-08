import React from "react";
import Lottie from "react-lottie";
import { styled } from "styled-components";
import tw from "twin.macro";
import * as loadingVideo from "../../../assets/videos/WTW_loading.json";

interface ILoadingProp {
  height: string | number;
  width: string | number;
}

const LoadingContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    justify-center
    mt-72
  `}
`;
export default function Loading(props: ILoadingProp) {
  return (
    <LoadingContainer>
      <Lottie
        options={{ animationData: loadingVideo }}
        height={props.height}
        width={props.width}
      />
    </LoadingContainer>
  );
}
