import React from "react";
import styles from './foodItem.module.css'

export default function FoodItem({ food }) {
  return (
   <div className={styles.foodItem}>
      <img className={styles.foodImage} src={food.image} alt={food.title} />
      <h1 className={styles.foodTitle}>{food.title}</h1>
      <button className={styles.viewButton}>View Recipe</button>
    </div>
  );
}
