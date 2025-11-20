import React from "react";
import style from "./searchComponents.module.css";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("pizza");
  return (
    <div>
      <input className={style.search} type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
  );
}
