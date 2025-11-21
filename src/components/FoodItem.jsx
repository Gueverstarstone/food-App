import React from "react";
import styles from './foodItem.module.css'

export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.image} alt="" />
      <h1>{food.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}
