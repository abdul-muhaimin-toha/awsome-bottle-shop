import PropTypes from 'prop-types';
import './CartItem.css';

function CartItem({ bottle, HandleRemoveBottleFromCart }) {
  return (
    <div className="cart-item">
      <img src={bottle.img} alt="" />
      <div className="cart">
        <h5>{bottle.name}</h5>
        <p>{bottle.seller}</p>
      </div>
      <button onClick={() => HandleRemoveBottleFromCart(bottle)}>x</button>
    </div>
  );
}

CartItem.propTypes = {
  bottle: PropTypes.object.isRequired,
  HandleRemoveBottleFromCart: PropTypes.func.isRequired,
};

export default CartItem;
