import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQ,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
} from '../constants/productConstants';

export const allProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    default:
      return state;

    case GET_PRODUCTS_REQ:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        count: action.payload.count,
      };
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
  }
};

export const singleProductReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;

    case GET_PRODUCT_DETAIL_SUCCESS:
      return { product: action.payload };
    case GET_PRODUCT_DETAIL_FAIL:
      return { error: action.payload };
  }
};
