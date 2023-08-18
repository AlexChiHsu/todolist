import React from "react";
import CastCard from "../../../components/common/card/castCard";
import { CastComponentContainer } from "../styles/castComponent";
import { useAppSelector } from "../../../app/hooks";
import { imagePath } from "../../../components/helper/media";

export default function CastComponent() {
  const { credits } = useAppSelector((state) => state.detail);
  const cast = credits.cast;

  return (
    <CastComponentContainer>
      {cast &&
        cast.map(
          (item: { id: number; profile_path: string | null; name: string }) => (
            <CastCard
              id={item.id}
              path={
                item.profile_path !== null ? imagePath(item.profile_path) : ""
              }
              name={item.name}
            />
          )
        )}
    </CastComponentContainer>
  );
}
