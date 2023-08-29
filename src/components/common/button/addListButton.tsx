import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useAppDispatch } from "../../../app/hooks";
import { MovieProp } from "../../../types/movieList";
import { setUserWishItem } from "../../../reducers/user/userSlice";

const ButtonGradientBg = styled.button`
  ${tw`
		w-40
		h-[42px]
    rounded-[13px]
		bg-transparent
    text-white
    font-normal
    text-[16px]
    leading-6
    p-0.5
	`}
  box-shadow: 0px 2px 8px 0px #0000007A;
  background-image: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
`;

const ButtonWithoutBg = styled.div`
  ${tw`
		w-40
		h-[42px]
		rounded-[13px]
		overflow-hidden
		p-[2px]
	`}
  background-image: linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
`;

const ButtonWithBlackBg = styled.button`
  ${tw`
		w-full
		h-full
		text-white
		font-normal
		text-[16px]
		rounded-[13px]
		leading-6
		text-center
	`}
  background-image: linear-gradient(0deg, #161616, #161616);
`;

interface IAddListButtonProp {
  item: MovieProp;
  type: string;
  wishListId: string;
}

export default function AddListButton(props: IAddListButtonProp) {
  const [isClick, setIsClick] = useState(false);
  const { item, type, wishListId } = props;
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setUserWishItem({ ...item, type: type }));
  };

  return (
    <>
      {wishListId === "0" ? (
        <ButtonGradientBg onClick={onClick}>加入片單</ButtonGradientBg>
      ) : (
        <ButtonWithoutBg>
          <ButtonWithBlackBg onClick={() => setIsClick(!isClick)}>
            移出片單
          </ButtonWithBlackBg>
        </ButtonWithoutBg>
      )}
    </>
  );
}
