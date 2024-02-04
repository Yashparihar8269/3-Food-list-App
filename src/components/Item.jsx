import Styles from "./Item.module.css"

const Item = ({fooditem , bought ,OnClickedBuy}) => {

  
  return (
    <li className={`${Styles["kg-item"]} list-group-item ${bought && "active"}`}>
      {fooditem}
      <button className={`${Styles.button} btn btn-danger`}
      onClick={OnClickedBuy}
      >Buy</button>
    </li>
  );
};

export default Item;
