import React from "react";

export default function FoodList({ foodData }) {
  return (
    <div>
      {/* //looping though foodData array */}
      {/* //food.title= property being accessed */}
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))}
    </div>
  );
}
