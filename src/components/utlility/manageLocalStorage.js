const getCartFromLocalStorage = () => {
  const cartInString = localStorage.getItem('cart');
  if (cartInString) {
    return JSON.parse(cartInString);
  }
  return [];
};

const setCartToLocalStorage = (cart) => {
  const cartInString = JSON.stringify(cart);
  localStorage.setItem('cart', cartInString);
};

const updateCartToLocalStorage = (data) => {
  const cart = getCartFromLocalStorage();
  cart.push(data);
  setCartToLocalStorage(cart);
};

export {
  getCartFromLocalStorage,
  setCartToLocalStorage,
  updateCartToLocalStorage,
};
