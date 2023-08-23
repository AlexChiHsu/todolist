import React from "react";
import { MovieContainer } from "./styles/movieStyles";
import Header from "./components/header";
import SubHeader from "./components/subHeader";
import Contents from "./components/contents";

export default function Movie() {
  return (
    <MovieContainer>
      <Header />
      <SubHeader />
      <Contents />
    </MovieContainer>
  );
}
