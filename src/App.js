import './App.css';
import CartList from './components/Cart/CartList';
import Header from './components/Header';
import Main from './components/Main';
import MealList from './components/Meals/MealList';
import Description from './components/UI/Description';

import { useState, useContext } from 'react';
import CartItemsContext from './context/cart-items-context';

function App() {
  const [showCartList, setShowCartList] = useState(false);
  const cartItemsCtx = useContext(CartItemsContext);

  const showCartListHandler = () => setShowCartList(true);
  const closeCartListHandler = () => setShowCartList(false);

  return (
    <div className="App">
      <Header onShowCartList={showCartListHandler}/>
      <Main >
        <Description />
        <MealList items={cartItemsCtx.mealItemsState}/>
      </Main>
      { showCartList && <CartList items={cartItemsCtx.mealItemsState} onCloseCartList={closeCartListHandler}/>}
    </div>
  );
}

export default App;
