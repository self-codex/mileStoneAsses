import {ADD_WISH_LIST, REMOVE_ITEM} from './actionType';

// add reducer to add wish and remove
export const addWishReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_WISH_LIST:
      return [...state, action.payload];
    case REMOVE_ITEM:
      const deleteArray = state.filter((item, index) => {
        return index != action.payload;
      });
      return deleteArray;

    default:
      return state;
  }
};
