import { styled } from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  text: string;
  onClick: Function;
  isFill?: boolean;
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
    pr-1
    pl-1
    pb-2
  `};

  &:focus {
    border-bottom-color: #2550bd;
    border-bottom-width: 2px;
  }
`;

const ListButton = styled(BaseButton)`
  ${tw`
    bg-transparent
  `};
  &:hover {
    background-color: transparent;
    color: #5799c8;
  }
`;

const FillButton = styled(BaseButton)`
  ${tw`
    pt-1.5
    pb-1.5
    pr-2.5
    pl-2.5
    flex
    flex-row
    rounded
    bg-blue-700
    text-white
    justify-center
    items-center
    text-center
  `}
`;

export default function Button(props: IButtonProps) {
  const { text, onClick, isFill } = props;
  const handle = () => {
    onClick();
  };
  return (
    <>
      {isFill ? (
        <FillButton>{text}</FillButton>
      ) : (
        <ListButton autoFocus={text === "清單"} onClick={handle}>
          {text}
        </ListButton>
      )}
    </>
  );
}
