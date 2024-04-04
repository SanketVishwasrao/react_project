import Hello from './Hello';
import Random from './Random';
import './App.css';

function App () {
  return (
    <div>
      {/* <h1>
            This is the best React course
        </h1>
        <Hello></Hello>
        <Random></Random> */}

      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <button type="button" class="btn btn-link">Link</button>
    </div>
  );
}

export default App;
