import { useContext } from "react";
import CartItemsContext from "../context/cart-items-context";
import classes from "./header.module.css";

const Header = ({ onShowCartList }) => {
  const cartItemsCtx = useContext(CartItemsContext);

  let totalItemsInCart = 0;

  cartItemsCtx.mealItemsState.forEach((item) => {
    totalItemsInCart += item.quantity;
  });

  return (
    <header className={classes.header}>
      <div className={classes.header_menu}>
        <h1>ReactMeals</h1>
        <div className={classes.cart_button} onClick={onShowCartList}>
          <span>Your cart</span>
          <span className={classes.cart_button_sumary_orders_span}>{totalItemsInCart}</span>
        </div>
      </div>
      <div className={classes.header_image}></div>
    </header>
  );
};

export default Header;
