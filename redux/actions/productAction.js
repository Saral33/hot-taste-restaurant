import axios from 'axios';
import absoluteUrl from 'next-absolute-url';
import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQ,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS,
} from '../constants/productConstants';

export const getAllProducts =
  (req, page = 1, sort) =>
  async (dispatch) => {
    const { origin } = absoluteUrl(req);
    dispatch({ type: GET_PRODUCTS_REQ });
    try {
      const { data } = await axios.get(
        `${origin}/api/products?page=${page}&sort=${sort}`
      );
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_PRODUCTS_FAIL,
        payload: error.response.data,
      });
    }
  };

export const getProductDetails = (req, id) => async (dispatch) => {
  const { origin } = absoluteUrl(req);
  try {
    const { data } = await axios.get(`${origin}/api/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAIL_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAIL_FAIL,
      payload: error.response.data,
    });
  }
};
