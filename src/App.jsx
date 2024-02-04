import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  //let foodItems = ["Roti", "Salad", "Green Vegetables", "Milk","Ghee","Chawal"];
  // let foodItems = [];

  let [textToShow, setTextState] = useState("Enter food items ");

  let [foodItems, setFoodItems] = useState([]);

  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItems(newFoodItems);
    }
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="kg-heading">Healthy food Items</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Above is the list of the healthy food items </p>
      </Container>
    </>
  );
}

export default App;
