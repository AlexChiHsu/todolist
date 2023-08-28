import React, { useState } from "react";
import { CollectionPageContainer } from "../styles/collectionStyles";
import { CastDetailTitleContainer } from "../../castDetail/styles/castDetailStyles";
import Text from "../../../components/common/text";
import { useAppSelector } from "../../../app/hooks";
import Contents from "../../movieOrTv/components/contents";
import { useParams } from "react-router-dom";
import { collectionList } from "../list/collectionList";

export default function CollectionPage() {
  const data = useAppSelector((state) => state.movieList.collectionList);
  const param = useParams();
  const { id, genres } = param;
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadFirst, setIsLoadFirst] = useState(true);
  const item = collectionList.find((item) => item.id.toString() === id);

  return (
    <CollectionPageContainer>
      <CastDetailTitleContainer>
        <Text text={item?.title} index={0} css={{ marginLeft: 16 }} />
      </CastDetailTitleContainer>
      <Contents
        data={[data]}
        isLoadFirst={isLoadFirst}
        setIsLoadFirst={setIsLoadFirst}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        isCollection={true}
        genres={genres}
        country={item?.title === "熱門韓劇" ? item.country : ""}
      />
    </CollectionPageContainer>
  );
}
