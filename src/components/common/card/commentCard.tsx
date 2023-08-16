import React from "react";
import {
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
        <Button
          isOpenBottomBar={false}
          isFill={false}
          onClick={() => {}}
          component={<Thumbnail isLogin={true} />}
        />
      </CommentCardLeft>
      <CommentCardCenter></CommentCardCenter>
      <CommentCardRight></CommentCardRight>
    </CommentCardContainer>
  );
}
