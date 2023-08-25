import React from "react";
import {
  CollectionCardButton,
  CollectionCardContainer,
} from "../styles/collectionStyles";
import { imagePath } from "../../../components/helper/media";

export default function CollectionCard() {
  return (
    <CollectionCardContainer path={imagePath("")}>
      <CollectionCardButton>浪漫愛情</CollectionCardButton>
    </CollectionCardContainer>
  );
}
