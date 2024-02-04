import { useState } from "react";
import Item from "./Item"

const FoodItems = ({items}) => {

  let [activeItems,setActiveItems] = useState([])

  let OnClickedBuyButton = (item,event) =>{
    let newItem = [...activeItems,item];
    setActiveItems(newItem);

  }
  
  return (
  <ul className="list-group">
    {items.map((item) => (
      <Item key={item} fooditem={item} 
      bought={activeItems.includes(item)}
      OnClickedBuy={(event)=>OnClickedBuyButton(item,event)}></Item>
    ))}
  </ul>
  )
};

export default FoodItems;
