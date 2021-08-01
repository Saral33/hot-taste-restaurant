import {
  allProductsReducer,
  categoryReducer,
  singleProductReducer,
} from './productReducer';

const { combineReducers } = require('redux');

export const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  singleProduct: singleProductReducer,
  categories: categoryReducer,
});
