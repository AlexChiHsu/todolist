import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../icons/icon";

interface IButtonProps {
  text?: string;
  onClick: Function;
  component?: JSX.Element;
}

const BaseButton = styled.button`
  ${tw`
    outline-none
    text-black
    text-xs
    font-semibold
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    justify-center
    items-center
    text-center
  `};

  &:focus {
    border-bottom-color: #2550bd;
    border-bottom-width: 2px;
  }
`;

const IconButtonContainer = styled(BaseButton)`
  ${tw`
    bg-transparent
    justify-center
    items-center
  `};
  &:hover {
    background-color: transparent;
    color: #5799c8;
  }
`;

export default function IconButton(props: IButtonProps) {
  const { text, onClick, component } = props;
  const handle = () => {
    onClick();
  };

  return (
    <>
      <IconButtonContainer onClick={handle}>
        {text && text}
        {component && component}
      </IconButtonContainer>
    </>
  );
}
