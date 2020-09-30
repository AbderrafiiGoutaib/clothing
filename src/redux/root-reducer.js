import { combineReducers } from "redux";
import userReducer from "../redux/user/user.reducer";
import cartReducer from "../redux/cart/cart.reducer";
import derectoryReducer from "../redux/derectory/derectory.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from '../redux/shop/shop.reducer'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  derectory: derectoryReducer,
  shop : shopReducer
});
export default persistReducer(persistConfig, rootReducer);
