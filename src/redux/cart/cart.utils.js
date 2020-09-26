export const addCartToItem = (cartItems, CartItemsToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === CartItemsToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === CartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...CartItemsToAdd, quantity: 1 }];
};
