import { allProductsReducer, singleProductReducer } from './productReducer';

const { combineReducers } = require('redux');

export const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
});
