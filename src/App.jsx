import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      {/* //looping though foodData array */}
      {/* //food.title= property being accessed */}
      {foodData.map((food) => (
        <h1>{food.title}</h1>
      ))}
    </>
  );
}

export default App;
