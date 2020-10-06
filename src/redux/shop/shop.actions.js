import ShopActionsTypes from "./shop.types";

export const updateCollections = (collectionMap) => ({
  type: ShopActionsTypes.UPDATE_COLLECTION,
  payload: collectionMap,
});
