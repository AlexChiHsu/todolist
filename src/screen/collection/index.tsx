import { CollectionContainer } from "./styles/collectionStyles";
import CollectionCard from "./components/collectionCard";
import { collectionList } from "./list/collectionList";

export default function Collection() {
  return (
    <CollectionContainer>
      {collectionList.map((item) => (
        <CollectionCard
          image={item.imageUrl}
          title={item.title}
          genres={item.genres.map((item) => item + "")}
          country={item.country}
          url={item.url ?? ""}
          id={item.id + ""}
        />
      ))}
    </CollectionContainer>
  );
}
