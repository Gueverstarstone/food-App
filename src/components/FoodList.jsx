import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <div>
      {/* //looping though foodData array */}
      {/* //food.title= property being accessed */}
      {foodData.map((food) => (
        // have a key in every map used
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}
