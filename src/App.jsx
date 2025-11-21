import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <>
      <Search foodData={foodData} setFoodData={setFoodData} />
      {/* //pass foodData as props */}
      <FoodList foodData={foodData}/>
    </>
  );
}

export default App;
