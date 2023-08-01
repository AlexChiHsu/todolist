import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../icons/icon";

interface IButtonProps {
  text?: string;
  onClick: Function;
  component?: JSX.Element;
  leftComponent?: JSX.Element;
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
    justify-between
    items-center
    flex
    flex-row
    text-black
    opacity-80
  `};
  &:hover {
    background-color: transparent;
    color: #5799c8;
  }
`;

export default function IconButton(props: IButtonProps) {
  const { text, onClick, component, leftComponent } = props;
  const handle = () => {
    onClick();
  };

  return (
    <>
      <IconButtonContainer onClick={handle}>
        {leftComponent && leftComponent}
        {text && text}
        {component && component}
      </IconButtonContainer>
    </>
  );
}
