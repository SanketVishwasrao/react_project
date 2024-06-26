import styles from './FoodInput.module.css';

const FoodInput = ({handleOnChange}) => {
  //   const handleOnChange = event => {
  //     console.log (event.target.value);
  //   };

  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      className={styles.foodInput}
      //   onChange={event => console.log (event.target.value)}
      //   onChange={handleOnChange}
      onKeyDown={handleOnChange}
    />
  );
};

export default FoodInput;
