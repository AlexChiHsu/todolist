import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";
import Icon from "../../components/common/icons/icon";
import IconButton from "../../components/common/button/iconButton";

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

const IconSectionContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-row
    justify-between
    items-center
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
      <IconSectionContainer>
        <IconButton
          text="未完成"
          onClick={() => {}}
          leftComponent={
            <Icon name="sort" stroke="#000000cc" width={16} height={16} />
          }
          component={
            <Icon
              name={"arrowDown"}
              stroke="#000000cc"
              width={16}
              height={16}
            />
          }
        />
        <IconButton
          text="篩選"
          onClick={() => {}}
          leftComponent={
            <Icon name="filter" stroke="#000000cc" width={16} height={16} />
          }
          component={
            <Icon
              name={"arrowDown"}
              stroke="#000000cc"
              width={16}
              height={16}
            />
          }
        />
        <IconButton
          text="排序"
          onClick={() => {}}
          leftComponent={
            <Icon
              name="arrowUpDown"
              stroke="#000000cc"
              width={16}
              height={16}
            />
          }
          component={
            <Icon
              name={"arrowDown"}
              stroke="#000000cc"
              width={16}
              height={16}
            />
          }
        />
        <IconButton
          text="分組"
          onClick={() => {}}
          leftComponent={
            <Icon name="menu" stroke="#000000cc" width={16} height={16} />
          }
          component={
            <Icon
              name={"arrowDown"}
              stroke="#000000cc"
              width={16}
              height={16}
            />
          }
        />
        <IconButton
          onClick={() => {}}
          leftComponent={
            <Icon
              name="arrowRightLeft"
              stroke="#000000cc"
              width={16}
              height={16}
            />
          }
        />
      </IconSectionContainer>
    </ButtonSectionContainer>
  );
}

export default ButtonSection;
