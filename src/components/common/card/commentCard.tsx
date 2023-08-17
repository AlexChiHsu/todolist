import React from "react";
import {
  ButtonThumbnail,
  CardStartsContainer,
  CommentCardCenter,
  CommentCardContainer,
  CommentCardLeft,
  CommentCardRight,
  UserComment,
  UserEditButton,
  UserNameText,
} from "../../../screen/detail/styles/comment";
import Thumbnail from "../../header/components/thumbnail";
import Icon from "../icons/icon";

export default function CommentCard() {
  const starts = [0, 1, 2, 3, 4];
  return (
    <CommentCardContainer>
      <CommentCardLeft>
        <ButtonThumbnail>
          <Thumbnail isLogin={true} />
        </ButtonThumbnail>
      </CommentCardLeft>
      <CommentCardCenter>
        <UserNameText>過客</UserNameText>
        <CardStartsContainer>
          {starts.map((item) => (
            <Icon name={"star"} width={17} height={17} fill={"#686B72"} />
          ))}
        </CardStartsContainer>
        <UserComment>
          老實說要不是演員感覺很努力在演，連兩顆星都懶得給.....
        </UserComment>
      </CommentCardCenter>
      <CommentCardRight>
        <UserEditButton>編輯</UserEditButton>
      </CommentCardRight>
    </CommentCardContainer>
  );
}
