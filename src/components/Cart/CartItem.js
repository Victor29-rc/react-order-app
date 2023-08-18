import AddRemoveItemButton from "./AddRemoveItemButton";
import classes from "./cartItem.module.css";

import CartItemsContext from "../../context/cart-items-context";
import { useContext } from "react";


const CartItem = ({item}) => {
  const cartItemCtx = useContext(CartItemsContext);

  const addItemHandler = () => {
    cartItemCtx.mealItemsDispatch({type: cartItemCtx.ACTIONS.ADD, id: item.id, quantity: 1 });
  }
  const subItemHandler = () => {
    cartItemCtx.mealItemsDispatch({type: cartItemCtx.ACTIONS.SUB, id: item.id, quantity: 1 });
  }

  return (
    <li className={classes.item_container}>
      <div className={classes.cart_item_info_container}>
        <span className={classes.item_title}>{item.name}</span>
        <div className={classes.cart_item_info}>
          <span className={classes.item_price}>${item.price}</span>
          <span className={classes.item_quantity}>x {item.quantity}</span>
        </div>
      </div>
      <div className={classes.cart_item_actions}>
        <AddRemoveItemButton title={"-"} onClick={subItemHandler}/>
        <AddRemoveItemButton title={"+"} onClick={addItemHandler}/>
      </div>
    </li>
  );
};

export default CartItem;
