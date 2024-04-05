import Hello from './Hello';
import Random from './Random';
import './App.css';
import FoodItems from './components/FoodItems';

function App () {

  // let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk', 'Ghee']
  // let foodItems = []

  // if (foodItems.length === 0) {
  //   return <h3>I am still hungry.</h3>
  // }

  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null

  return (
    <>
      {/* <h1>
            This is the best React course
        </h1>
        <Hello></Hello>
        <Random></Random> */}

      {/* <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button> */}

      <h1>Healthy Food</h1>
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

      <FoodItems />
      </>
  );
}

export default App;
