const {configureStore} = require('@reduxjs/toolkit');
import {addWishReducer} from './reducer';

export const store = configureStore({
  reducer: {addWishReducer},
});
