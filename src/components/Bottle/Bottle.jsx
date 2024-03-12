import PropTypes from 'prop-types';
import './Bottle.css';

function Bottle({ bottle, handleAddBottleToCart }) {
  const { name, img, price } = bottle;
  return (
    <div className="bottle-card">
      <h3>{name}</h3>
      <img src={img} alt="name" />
      <p>Price: ${price}</p>
      <button onClick={() => handleAddBottleToCart(bottle)}>Purchase</button>
    </div>
  );
}

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddBottleToCart: PropTypes.func.isRequired,
};

export default Bottle;
