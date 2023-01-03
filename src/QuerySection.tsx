import React, { FC, useState } from "react";

export type Position = "center-top" | "center-bottom" | "center";

export interface IQuerySectionProps {
  search: (text: string, imageText: string, position: Position) => void;
}

export const QuerySection: FC<IQuerySectionProps> = ({ search }) => {
  const [query, setQuery] = useState("");
  const [imageText, setImageText] = useState("");
  const [position, setPosition] = useState<Position>("center-top");

  return (
    <div>
      <input
        type="text"
        placeholder="Query"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Image Text"
        value={imageText}
        onChange={(event) => setImageText(event.target.value)}
      ></input>
      <select
        value={position}
        onChange={(event) => setPosition(event.target.value as Position)}
      >
        <option value="center-top">center top</option>
        <option value="center-bottom">center bottom</option>
        <option value="center">center</option>
      </select>
      <button onClick={() => search(query, imageText, position)}>Search</button>
    </div>
  );
};
