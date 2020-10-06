
import ShopActionsTypes from "./shop.types";

const INITIAL_SHOP = {
  collections: null,
};

const shopReducer = (state = INITIAL_SHOP, actions) => {
  switch (actions.type) {
    case ShopActionsTypes.UPDATE_COLLECTION:
      return {
        ...state,
        collections: actions.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
