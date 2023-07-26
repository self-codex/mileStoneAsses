import {ADD_WISH_LIST, REMOVE_ITEM} from '../actionType';

// action
export const removeItem = index => {
  return {
    type: REMOVE_ITEM,
    payload: index,
  };
};
export const addWishList = data => {
  return {
    type: ADD_WISH_LIST,
    payload: data,
  };
};
