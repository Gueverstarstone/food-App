import React from "react";
import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {/* //looping though foodData array */}
      {/* //food.title= property being accessed */}
      {foodData.map((food) => (
        // have a key in every map used
        <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
