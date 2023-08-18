import React, { useReducer } from "react";

const CartItemsContext = React.createContext({
  mealItemsState: [],
  mealItemsReducer: () => {},
  ACTIONS: {},
});

const ACTIONS = {
  ADD: "ADD",
  SUB: "SUB",
};

const MEAL_ITEMS = [
  {
    id: 1,
    name: "Sushi",
    description: "Fines fish and veggies",
    price: "22.99",
    quantity: 0,
  },
  {
    id: 2,
    name: "Schnitzel",
    description: "A german specialty!",
    price: "16.50",
    quantity: 0,
  },
  {
    id: 3,
    name: "Barbecue Burger",
    description: "Smash cheese and bacon burger with barbecue",
    price: "12.50",
    quantity: 0,
  },
];

const mealItemsReducer = (state, action) => {
  if (action.type === ACTIONS.ADD) {
    return state.map((item) => {
      if (parseInt(item.id) === parseInt(action.id)) {
        return {
          ...item,
          quantity: parseInt(item.quantity) + action.quantity,
        };
      } else {
        return item;
      }
    });
  } else if (action.type === ACTIONS.SUB) {
    return state.map((item) => {
      if (parseInt(item.id) === parseInt(action.id)) {
        return {
          ...item,
          quantity: parseInt(item.quantity) - action.quantity,
        };
      } else {
        return item;
      }
    });
  } else {
    return MEAL_ITEMS;
  }
};

export const CartItemsProvider = ({ children }) => {
  const [mealItemsState, mealItemsDispatch] = useReducer(
    mealItemsReducer,
    MEAL_ITEMS,
  );

  return (
    <CartItemsContext.Provider
      value={{
        mealItemsState,
        mealItemsDispatch,
        ACTIONS
      }}
    >
      {children}
    </CartItemsContext.Provider>
  );
};

export default CartItemsContext;
