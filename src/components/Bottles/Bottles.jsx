import { useState } from 'react';
import { useEffect } from 'react';
import './Bottles.css';
import Bottle from '../Bottle/Bottle';
import Cart from '../Cart/Cart';
import {
  getCartFromLocalStorage,
  updateCartToLocalStorage,
  setCartToLocalStorage,
} from '../utlility/manageLocalStorage';

function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddBottleToCart = (bottle) => {
    updateCartToLocalStorage(bottle.id);
    setCart([...cart, bottle]);
  };

  const HandleRemoveBottleFromCart = (bottle) => {
    const updatedCart = cart.filter((item) => item.id !== bottle.id);
    setCart(updatedCart);
    const updatedCartInID = updatedCart.map((item) => item.id);
    setCartToLocalStorage(updatedCartInID);
  };

  useEffect(() => {
    fetch('bottles.json')
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    const itemsIDs = getCartFromLocalStorage();
    if (bottles.length) {
      const initialCart = [];
      for (const id of itemsIDs) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        initialCart.push(bottle);
      }
      setCart(initialCart);
    }
  }, [bottles]);

  return (
    <div>
      <Cart
        cart={cart}
        HandleRemoveBottleFromCart={HandleRemoveBottleFromCart}
      ></Cart>
      <h2 className="bottle-count">Bottles in stock: {bottles.length}</h2>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddBottleToCart={handleAddBottleToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
}

export default Bottles;
