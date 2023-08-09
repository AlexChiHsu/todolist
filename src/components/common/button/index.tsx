import { useEffect, useState } from "react";
import { CSSProp, css, styled } from "styled-components";
import tw, { TwStyle } from "twin.macro";

interface IButtonProps {
  text?: string;
  onClick: Function;
  isFill?: boolean;
  component?: JSX.Element;
  css?: CSSProp | TwStyle;
  isSelected?: boolean;
  isOpenBottomBar: boolean;
}

const BaseButton = styled.button<{ styles?: any }>`
  ${tw`
    outline-none
    text-black
    font-normal
    text-lg
    leading-6
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    justify-center
    items-center
    text-center
    pr-1
    pl-1
    pb-2
  `};

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
`;

const ButtonContainer = styled.div`
  width: 78;
  ${tw`
    mr-[3px]
    ml-[3px]
  `}
  &:hover {
    background-color: linear-gradient(91.47deg, #c10171, #5c00f2) 1;
  }

  &:focus {
    background-color: linear-gradient(91.47deg, #c10171, #5c00f2) 1;
  }
`;

const BottomBar = styled.div`
  ${tw`
    w-full
    h-1
    rounded-full
    bottom-0
  `}
  background: linear-gradient(91.47deg, #C10171 3.73%, #5C00F2 100%);
`;

const ListButton = styled(BaseButton)`
  ${tw`
    bg-transparent
    justify-center
    items-center
    text-white
    text-sm
    font-normal
    leading-5
    lg:pr-6
    lg:pl-6
    md:pr-3
    md:pl-3
    sm:pr-1
    sm:pl-1
  `};
  &:hover {
    background-color: transparent;
    color: #5799c8;
  }
`;

const FillButton = styled(BaseButton)`
  ${tw`
    w-44
    h-10
    p-2.5
    flex
    flex-row
    gap-2.5
    rounded-lg
    text-white
    justify-center
    items-center
    text-center
    mt-6
    font-normal
  `};
  &:hover {
    color: #5799c8;
  }
  font-size: 16px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.48);
  background: linear-gradient(91.47deg, #c10171 3.73%, #5c00f2 100%);
`;

export default function Button(props: IButtonProps) {
  const { text, onClick, isFill, component, css, isSelected, isOpenBottomBar } =
    props;
  const [isShowBottomBar, setIsShowBottomBar] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handle = () => {
    onClick();
  };

  useEffect(() => {
    if (isSelected || isHover) {
      setIsShowBottomBar(true);
    } else {
      setIsShowBottomBar(false);
    }
  }, [isSelected, isHover]);

  return (
    <>
      {isFill ? (
        <FillButton styles={css}>
          {text && text}
          {component && component}
        </FillButton>
      ) : (
        <>
          <ButtonContainer
            onMouseEnter={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
          >
            <ListButton styles={css} onClick={handle}>
              {text && text}
              {component && component}
            </ListButton>
            {isOpenBottomBar && isShowBottomBar && <BottomBar />}
          </ButtonContainer>
        </>
      )}
    </>
  );
}
