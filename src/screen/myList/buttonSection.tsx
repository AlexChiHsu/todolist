import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../../components/common/icons/icon";

const ButtonSectionContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-row
    items-center
    justify-between
    mt-6
  `}
`;

const NewButton = styled.button`
  ${tw`
    border-2
    border-blue-600
    rounded-md
    text-blue-600
    flex
    flex-row
    items-center
    justify-center
    text-center
    pr-1
    pl-1
    text-sm
  `}
`;
const NewSectionButtonLeft = styled.button`
  ${tw`
    flex
    flex-row
    items-center
    justify-center
    text-center
    pr-1
  `}
`;
const NewSectionButtonRight = styled.button`
  ${tw`
    flex
    flex-row
    items-center
    justify-center
    text-center
    text-sm
    border-l-2
    border-blue-600
    pl-1
  `}
`;

function ButtonSection() {
  return (
    <ButtonSectionContainer>
      <NewButton>
        <NewSectionButtonLeft>
          <Icon name="plus" stroke="#2563eb" width={16} height={16} />
          新增任務
        </NewSectionButtonLeft>
        <NewSectionButtonRight>
          <Icon name="arrowDown" stroke="#2563eb" width={20} height={20} />
        </NewSectionButtonRight>
      </NewButton>
    </ButtonSectionContainer>
  );
}

export default ButtonSection;
