import styles from './Item.module.css';

const Item = ({foodItem, handleBuyButton}) => {
  // console.log (styles);
  // let {foodItem} = props;

  // const handleBuyButton = () => {
  //   console.log (`${foodItem} is bought`);
  // };

  return (
    <li className={`${styles['kg-item']} list-group-item`}>
      <span className={styles['kg-span']}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
