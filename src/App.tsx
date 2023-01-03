import React from "react";
import { Position, QuerySection } from "./QuerySection";

export const App = () => {
  const handleSearch = (
    text: string,
    imageText: string,
    position: Position
  ) => {
    // TODO: Fetch data from Giphy
  };

  return <QuerySection search={handleSearch} />;
};
