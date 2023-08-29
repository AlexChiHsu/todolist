import styled, { css } from "styled-components";
import tw from "twin.macro";

export const DialogContainer = styled.div`
  ${tw`
    w-[370px]
    h-[234px]
    bg-[#161616]
    rounded-[20px]
    flex
    flex-col
    items-center
    justify-center
  `}
  box-shadow: 0px 2px 8px 0px #0000007A;
`;

export const DialogTitle = styled.h2`
  ${tw`
    font-normal
    text-[16px]
    text-white
    mb-[18px]
  `}
`;

export const DialogButton = styled.button<{ cancel?: any }>`
  ${tw`
    w-[250px]
    h-[42px]
    rounded-[13px]
    bg-white
    flex
    items-center
    justify-center
    mt-2.5
  `}
  box-shadow: 0px 2px 8px 0px #0000007A;
  ${({ cancel }) =>
    cancel &&
    css`
      padding: 1px;
      background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
    `}
`;

export const DialogIconDiv = styled.div`
  ${tw`
    h-full
    flex
    pb-1
    justify-center
    items-center
  `}
`;

export const DialogButtonText = styled.h5<{ cancel?: any }>`
  ${tw`
    font-normal
    text-[16px]
    text-[#161616]
    text-center
    ml-2.5
  `}
  ${({ cancel }) =>
    cancel &&
    css`
      width: 100%;
      height: 100%;
      margin-left: 0;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #161616;
      border-radius: 13px;
      align-self: center;
    `}
`;
