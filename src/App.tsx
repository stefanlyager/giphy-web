import React from "react";
import { Position, QuerySection } from "./QuerySection";

export const App = () => {
  const handleSearch = async (
    text: string,
    imageText: string,
    position: Position
  ) => {
    const response = await fetch(
      `https://api.giphy.com/v1/stickers/search?q=${encodeURIComponent(
        text
      )}&limit=3&rating=g&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq`
    );

    const json = await response.json();
    console.log(json);
  };

  return <QuerySection search={handleSearch} />;
};
