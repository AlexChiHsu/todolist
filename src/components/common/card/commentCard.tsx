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
import { imagePath } from "../../helper/media";

interface CommentCardProp {
  userName: string;
  rating: number;
  content: string;
  thumbnailUrl: string;
}

export default function CommentCard(props: CommentCardProp) {
  const { userName, rating, content, thumbnailUrl } = props;
  const starts = [0, 1, 2, 3, 4];
  const hightLight: number[] = [];
  const isLogin = userName === "AlexChiHsu";
  let defaultContent = "";

  switch (Math.round(rating / 2)) {
    case 1:
      hightLight.push(0);
      defaultContent = "糟透了";
      break;
    case 2:
      hightLight.push(0);
      hightLight.push(1);
      defaultContent = "我覺得不行...";
      break;
    case 3:
      hightLight.push(0);
      hightLight.push(1);
      hightLight.push(2);
      defaultContent = "還不錯";
      break;
    case 4:
      hightLight.push(0);
      hightLight.push(1);
      hightLight.push(2);
      hightLight.push(3);
      defaultContent = "推薦";
      break;
    case 5:
      hightLight.push(0);
      hightLight.push(1);
      hightLight.push(2);
      hightLight.push(3);
      hightLight.push(4);
      defaultContent = "極度好評!";
      break;
  }

  return (
    <CommentCardContainer>
      <CommentCardLeft>
        <ButtonThumbnail>
          <Thumbnail url={imagePath(thumbnailUrl)} />
        </ButtonThumbnail>
      </CommentCardLeft>
      <CommentCardCenter>
        <UserNameText>{userName}</UserNameText>
        <CardStartsContainer>
          {starts.map((item, index) => (
            <Icon
              name={"star"}
              width={17}
              height={17}
              fill={
                hightLight.length === 0
                  ? "#686B72"
                  : hightLight[item] === index
                  ? "#C10171"
                  : "#686B72"
              }
            />
          ))}
        </CardStartsContainer>
        <UserComment>
          {content === "" || content === null || content === undefined
            ? defaultContent
            : content}
        </UserComment>
      </CommentCardCenter>
      {isLogin && (
        <CommentCardRight>
          <UserEditButton>編輯</UserEditButton>
        </CommentCardRight>
      )}
    </CommentCardContainer>
  );
}
