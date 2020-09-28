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
export const removeCartFromItem = (cartItems, CartItemsToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === CartItemsToRemove.id
  );
if(existingCartItem.quantity=== 1){
  return cartItems.filter(cartItem =>cartItem.id !== CartItemsToRemove.id)
}

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === CartItemsToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
