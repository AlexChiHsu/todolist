import React, { useEffect, useState } from "react";
import {
  CardContainer,
  CommentButton,
  CommentContainer,
  CommentHeaderContainer,
  StartsContainer,
} from "../styles/comment";
import Text from "../../../components/common/text";
import Icon from "../../../components/common/icons/icon";
import CommentCard from "../../../components/common/card/commentCard";
import { useAppSelector } from "../../../app/hooks";
import { auth } from "../../../config/firebase";

export default function Comment() {
  const comments = useAppSelector((state) => state.detail.comments);
  const starts = [0, 1, 2, 3, 4];
  const [selected, setSelected] = useState<number>(-1);
  const [hightLight, setHightLight] = useState<number[]>([]);
  const hoverColor = "#C10171";

  useEffect(() => {
    const newArr: number[] = [];

    switch (selected) {
      case 0:
        newArr.push(0);
        break;
      case 1:
        newArr.push(0);
        newArr.push(1);
        break;
      case 2:
        newArr.push(0);
        newArr.push(1);
        newArr.push(2);
        break;
      case 3:
        newArr.push(0);
        newArr.push(1);
        newArr.push(2);
        newArr.push(3);
        break;
      case 4:
        newArr.push(0);
        newArr.push(1);
        newArr.push(2);
        newArr.push(3);
        newArr.push(4);
        break;
    }

    setHightLight(newArr);
  }, [selected]);

  return (
    <CommentContainer>
      <CommentHeaderContainer>
        <CommentButton>
          {auth.currentUser === null ? (
            <Text text={"請登入後評論"} index={0} />
          ) : (
            <>
              <Text text={"我來評論"} index={0} />
              {starts.map((item, index) => (
                <StartsContainer
                  index={item}
                  onMouseOver={() => setSelected(item)}
                  onMouseLeave={() => setSelected(-1)}
                >
                  <Icon
                    name={"star"}
                    width={20}
                    height={20}
                    fill={
                      hightLight.length === 0
                        ? "#686B72"
                        : hightLight[item] === index
                        ? hoverColor
                        : "#686B72"
                    }
                  />
                </StartsContainer>
              ))}
            </>
          )}
        </CommentButton>
      </CommentHeaderContainer>
      <CardContainer>
        {comments.results.map(
          (item: {
            author: string;
            author_details: { rating: number; avatar_path: string };
            content: string;
          }) => (
            <CommentCard
              userName={item.author}
              rating={item.author_details.rating}
              content={item.content}
              thumbnailUrl={item.author_details.avatar_path}
            />
          )
        )}
      </CardContainer>
    </CommentContainer>
  );
}
