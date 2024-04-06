import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Item from "./Item";

const FoodItems = ({ items }) => {
//   let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];
    // let foodItems = []

  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item]
    setActiveItems(newItems)
  }

  return (
    <>
    {items.length === 0 && <ErrorMessage />}
    <ul className="list-group">
      {items.map (item => (
        <Item key={item} 
          foodItem={item}
          bought={activeItems.includes(item)} 
          // handleBuyButton={() => console.log(`${item} bought`)} />
          handleBuyButton={(event) => onBuyButton(item, event)} />
      ))}
    </ul>
    </>
  );
};

export default FoodItems;
