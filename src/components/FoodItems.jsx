import ErrorMessage from "./ErrorMessage";
import Item from "./Item";

const FoodItems = ({ items }) => {
//   let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];
    // let foodItems = []

  return (
    <>
    {items.length === 0 && <ErrorMessage />}
    <ul className="list-group">
      {items.map (item => (
        <Item key={item} 
          foodItem={item} 
          handleBuyButton={() => console.log(`${item} bought`)} />
      ))}
    </ul>
    </>
  );
};

export default FoodItems;
