import { useState } from "react";
import AddMealButton from "../UI/AddMealButton";

import classes from "./mealItem.module.css";
import { useContext } from "react";
import CartItemsContext from "../../context/cart-items-context";

const MealItem = ({ item }) => {
  const cartItemCtx = useContext(CartItemsContext);
  const [amount, setAmount] = useState(0);

  const onClickHandler = () => {
    cartItemCtx.mealItemsDispatch({
      type: cartItemCtx.ACTIONS.ADD,
      id: item.id,
      quantity: parseInt(amount)
    })
  };

  return (
    <li className={classes.meal_item}>
      <div>
        <span className={classes.meal_item_tittle}>{item.name}</span>
        <span className={classes.meal_item_description}>
          {item.description}
        </span>
        <span className={classes.meal_item_price}>${item.price}</span>
      </div>
      <div className={classes.meal_item_actions_container}>
        <div className={classes.meal_item_quantity_container}>
          <span className={classes.meal_item_amount_tittle}>Amount</span>
          <input
            className={classes.meal_item_quantity_input}
            type="number"
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value);
            }}
            min="0"
          ></input>
        </div>
        <AddMealButton onClick={onClickHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
