import './App.css';
import FoodItems from './components/FoodItems';

function App () {

  let foodItems = ['Sabzi', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee']
  // let foodItems = []

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>
  // }

  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null

  return (
    <>
      <h1 className='food-heading'>Healthy Food</h1>
      {/* <ul class="list-group">
        <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green Vegetable</li>
        <li class="list-group-item">Roti</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li>
      </ul> */}

      {/* {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null} */}

      {/* {emptyMessage} */}

      {/* {foodItems.length === 0 && <h3>I am still hungry.</h3>}   */}

      {/* <FoodItems /> */}

      <FoodItems items={foodItems} />
      </>
  );
}

export default App;
