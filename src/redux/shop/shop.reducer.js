import SHOP_DATA from "./shop.data";

const INITIAL_SHOP = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_SHOP, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default shopReducer;
