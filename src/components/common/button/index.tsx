import { CSSProp, css, styled } from "styled-components";
import tw, { TwStyle } from "twin.macro";

interface IButtonProps {
  text?: string;
  onClick: Function;
  isFill?: boolean;
  component?: JSX.Element;
  css?: CSSProp | TwStyle;
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
    pb-1
    border-b-2
    border-b-transparent
  `};

  ${({ styles }) =>
    styles &&
    css`
      ${styles}
    `}
  &:hover {
    border-bottom-color: #2550bd;
    border-bottom-width: 2px;
  }

  &:focus {
    border-bottom-color: #2550bd;
    border-bottom-width: 2px;
  }
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
  const { text, onClick, isFill, component, css } = props;
  const handle = () => {
    onClick();
  };

  return (
    <>
      {isFill ? (
        <FillButton styles={css}>
          {text && text}
          {component && component}
        </FillButton>
      ) : (
        <ListButton styles={css} autoFocus={text === "清單"} onClick={handle}>
          {text && text}
          {component && component}
        </ListButton>
      )}
    </>
  );
}
