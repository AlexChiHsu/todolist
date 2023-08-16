import { styled } from "styled-components";
import tw from "twin.macro";

export const CastComponentContainer = styled.div`
  ${tw`
    w-full
    max-h-[250px]
    bg-[#686B721A]
    rounded-[20px]
    flex
    flex-row
    flex-wrap
    items-center
    pl-5
    pr-5
    pt-5
    pb-2.5
    mb-3
    overflow-auto
  `}
`;

export const CastCardButton = styled.button`
  ${tw`
    w-[76px]
    h-[106px]
    overflow-hidden
    flex
    flex-col
    justify-between
    pb-1
    mr-2.5
    mb-3
  `}
`;

export const BgImage = styled.div<{ path?: any }>`
  ${tw`
    w-full
    h-[75px]
    rounded-xl
    bg-cover
    bg-no-repeat
    bg-center
  `}
  background-image: url(${({ path }) => path});
  box-shadow: 0px 2px 8px 0px #0000007a;
`;

export const Name = styled.h5`
  ${tw`
    w-full
    font-normal
    text-white
    text-xs
    leading-3
    text-center
    line-clamp-2
  `}
`;
