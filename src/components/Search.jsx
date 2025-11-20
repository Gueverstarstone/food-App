import React from "react";
import style from "./searchComponents.module.css";
import { useState } from "react";
import { useEffect } from "react";

export default function Search() {
  const [query, setQuery] = useState("pizza");

  // Syntax
  // useEffect(()=>{},[])

  useEffect(()=>{
    function demo() {
      console.log('use of useEffect')
    }
    demo();
  },[query])
  return (
    <div>
      <input className={style.search} type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
  );
}
