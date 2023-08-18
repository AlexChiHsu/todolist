import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../app/hooks";

export default function CastDetail() {
  const cast = useAppSelector((state) => state.detail.combinedCredits);

  return <div className="text-white">{JSON.stringify(cast)}</div>;
}
