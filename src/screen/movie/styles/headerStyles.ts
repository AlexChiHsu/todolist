import { styled } from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`
    w-full
    h-auto
    bg-[#686B721A]
    mt-6
    pt-6
    pb-6
    pl-4
    pr-4
  `}
`;

export const GridContainer = styled.div`
  ${tw`
    grid
    gap-1.5
    lg:grid-cols-16
    grid-cols-4
    sm:grid-cols-10
    mt-4
    mb-7
  `}
`;
export const TypeButton = styled.button`
  ${tw`
    w-[67px]
    h-[28px]
    rounded
    text-white
    font-normal
    text-sm
    bg-[#161616]
  `}
  &:focus {
    background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
  }
`;

export const SliderContainer = styled.div`
  ${tw`
    w-[290px]
    h-[19px]
    flex
    items-center
    bg-[#161616]
    pl-[5px]
    pr-[5px]
    rounded-full
    ml-[5px]
    mr-[5px]
  `}
`;

export const SliderBarDiv = styled.div`
  ${tw`
    w-full
    h-full
    flex
    items-center
    rounded-full
  `}
`;

export const SliderBar = styled.input<{ width?: any }>`
  ${tw`
    w-full
    h-[11px]
    rounded-full
    appearance-none
    cursor-pointer
    bg-slider
    bg-no-repeat
  `}

  background-size: ${({ width }) => width}% 100%;

  &::-webkit-slider-thumb {
    position: relative;
    -webkit-appearance: none;
    width: 26px;
    height: 26px;
    top: -8.5px;
    border-radius: 100%;
    border-width: 4px;
    border-style: solid;
    border-color: #161616;
    background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    height: 11px;
    width: 100%;
    border-radius: 5px;
    border: none;
    background-image: transparent;
    outline: none;
  }

  &::-ms-thumb {
    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 100%;
    border-width: 4px;
    border-style: solid;
    border-color: #161616;
    background-image: #161616;
  }
  &::-moz-range-thumb {
    position: relative;
    width: 26px;
    height: 26px;
    border-radius: 100%;
    border-width: 4px;
    border-style: solid;
    border-color: #161616;
    background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
  }
`;

export const SearchButtonContainer = styled.div`
  ${tw`
    flex-1
    flex
    justify-end
    pr-4
  `}
`;

export const SearchButton = styled.button`
  ${tw`
    w-40
    h-[42px]
    text-white
    font-normal
    text-[16px]
    rounded-[13px]
  `}
  background-image: linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
  box-shadow: 0px 2px 8px 0px #0000007a;
`;
