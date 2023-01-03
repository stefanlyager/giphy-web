import React, { FC, useState } from "react";
import { Position, QuerySection } from "./QuerySection";

export const App: FC = () => {
  const [searchResult, setSearchResult] = useState<string[]>([]);

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
    const urls = json.data.map((d: any) => d.images.downsized_medium.url);
    setSearchResult(urls);

    console.log(urls);
  };

  return <QuerySection search={handleSearch} />;
};
