import React from "react";
import {
  ButtonThumbnail,
  CommentCardCenter,
  CommentCardContainer,
  CommentCardLeft,
  CommentCardRight,
} from "../../../screen/detail/styles/comment";
import Button from "../button";
import Thumbnail from "../../header/components/thumbnail";

export default function CommentCard() {
  return (
    <CommentCardContainer>
      <CommentCardLeft>
        <ButtonThumbnail>
          <Thumbnail isLogin={true} />
        </ButtonThumbnail>
      </CommentCardLeft>
      <CommentCardCenter></CommentCardCenter>
      <CommentCardRight></CommentCardRight>
    </CommentCardContainer>
  );
}
