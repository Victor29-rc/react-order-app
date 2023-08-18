import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import classes from "./cartList.module.css";
import "./cartList.css";
import OrderCloseButton from "./OrderCloseButton";
import { useContext } from "react";
import CartItemsContext from "../../context/cart-items-context";

const CartList = ({onCloseCartList}) => {

  const cartItemCtx = useContext(CartItemsContext);
  let filteredCartItems = [];
  let totalAmount = 0;

  cartItemCtx.mealItemsState.forEach((item) => {
    if(parseInt(item.quantity) > 0) {
      filteredCartItems.push(<CartItem key={item.id} item={item} />);
      totalAmount += (item.quantity * item.price);
    }
  });

  totalAmount = totalAmount.toFixed(2);

  const onOrderClickHandler = () => {
    console.log('Ordering...');
  }

  return (
    <Modal modalStyles={{ width: "600px" }}>
      <ul className={classes.cart_list + " cart-list"}>
        {filteredCartItems}
      </ul>
      <div className={classes.total_section}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.order_close_section}>
        <OrderCloseButton
          title={"Close"}
          class_style={"primary"}
          style={{ marginRight: "10px" }}
          onClick={onCloseCartList}
        />
        <OrderCloseButton title={"Order"} class_style={"secondary"} onClick={onOrderClickHandler}/>
      </div>
    </Modal>
  );
};

export default CartList;
