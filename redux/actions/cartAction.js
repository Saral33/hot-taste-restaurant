import axios from 'axios';
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART,
} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: data.product._id,
      title: data.product.title,
      image: data.product.image_url,
      price: data.product.price,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const deleteFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const getAllCarts = () => async (dispatch) => {
  const cartState =
    typeof window !== 'undefined' && localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [];
  console.log(cartState);
  dispatch({
    type: GET_CART,
    payload: cartState,
  });
};
