import React from "react";
import style from "./searchComponents.module.css";
import { useState, useEffect } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "fa4cc8d3391e485cb718e3a28faeb183";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    // use of asynchronous function
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div>
      <input
        className={style.search}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
