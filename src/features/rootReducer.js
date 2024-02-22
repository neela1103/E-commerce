// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
import filterReducer from './filterSlice'; 

const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
    filter: filterReducer, // corrected key name
});

export default rootReducer;