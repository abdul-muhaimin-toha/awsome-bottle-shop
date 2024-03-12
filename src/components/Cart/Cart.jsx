import PropTypes from 'prop-types';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart({ cart, HandleRemoveBottleFromCart }) {
  return (
    <div className="cart-container">
      <h2>Cart: {cart.length} </h2>
      <div className="cart-item-container">
        {cart.map((item, index) => (
          <CartItem
            bottle={item}
            key={index}
            HandleRemoveBottleFromCart={HandleRemoveBottleFromCart}
          ></CartItem>
        ))}
      </div>
    </div>
  );
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  HandleRemoveBottleFromCart: PropTypes.func.isRequired,
};

export default Cart;
