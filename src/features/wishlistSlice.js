import { createSlice } from '@reduxjs/toolkit';
import { addToCart, increaseItemQuantity  } from './cartSlice'; // Assuming these actions are defined in your cartSlice

export const moveToCartAsync = (item) => async (dispatch, getState) => {
  const state = getState();
  const wishItemIndex = state.wishlist.wish.findIndex((wishItem) => wishItem.id === item.id);

  if (wishItemIndex >= 0) {
    const wishItem = state.wishlist.wish[wishItemIndex];
    const cartItemIndex = state.cart.cart.findIndex((cartItem) => cartItem.id === item.id);

    if (cartItemIndex >= 0) {
      alert('This item is already in your cart! Want to add again?');
      dispatch(increaseItemQuantity(item.id));
    } else {
      const newItemInCart = { ...wishItem, quantity: 1 };
      dispatch(addToCart(newItemInCart));
    }

    dispatch(removeItemWish(item.id));
  }
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  totalQuantity: 0,
  initialState: {
    wish: [],
    // ... other initial state properties
  },
  reducers: {
    movetowish: (state, action) => {
      const findIndex = state.wish.findIndex((item) => item.id === action.payload.id);

      if (findIndex >= 0) {
        // Item is already in the wishlist, update the quantity
        state.wish = state.wish.map((item, index) => {
          if (index === findIndex) {
            return { ...item, quantity: item.quantity + parseInt(action.payload.quantity, 10) };
          }
          return item;
        });
      } else {
        // Item is not in the wishlist, add it
        state.wish = [...state.wish, { ...action.payload, quantity: parseInt(action.payload.quantity, 10) }];
      }
    },

    removeItemWish: (state, action) => {
      state.wish = state.wish.filter((item) => item.id !== action.payload);
    },
  //   getWishTotal: (state) => {
  //     const { totalwishQuantity } = state.wish.reduce(
  //         (wishTotal, wishItem) => {
  //             const { quantity } = wishItem; // Fix variable name from cartItem to wishItem
  //             // const itemTotal = parseFloat(wishItem.amount.replace(',', '')) * quantity; // Parse amount to number
  //             wishTotal.totalwishQuantity += quantity;
  //             return wishTotal;
  //         },
  //         {
  //             totalwishQuantity: 0,
  //         }
  //     );
  //     state.totalwishQuantity = totalwishQuantity;
  // },
  

  },
});

export const { movetowish, removeItemWish  } = wishlistSlice.actions;
export default wishlistSlice.reducer;