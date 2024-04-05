import ErrorMessage from "./ErrorMessage";

const FoodItems = () => {
//   let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee'];
    let foodItems = []

  return (
    <>
    {foodItems.length === 0 && <ErrorMessage />}
    <ul className="list-group">
      {foodItems.map (item => (
        <li key={item} className="list-group-item">{item}</li>
      ))}
    </ul>
    </>
  );
};

export default FoodItems;
