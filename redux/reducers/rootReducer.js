import { cartReducer } from './cartReducer';
import {
  allProductsReducer,
  categoryReducer,
  singleProductReducer,
} from './productReducer';
import { authReducer } from './userReducer';

const { combineReducers } = require('redux');

export const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
  categories: categoryReducer,
  cart: cartReducer,
  auth: authReducer,
});
