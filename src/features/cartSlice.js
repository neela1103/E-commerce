// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import clothes from '../ShoppingComp/Data';

const initialState = {//initalstate an obj of case reducer cart,item,totalquan 
    //these are key name to generate action
    cart: [],
    item: clothes,
    totalQuantity: 0,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);

            if (findIndex >= 0) {
                state.cart = state.cart.map((item, index) => {
                    if (index === findIndex) {
                        // Update the existing item without mutating it directly
                        return { ...item, quantity: item.quantity + parseInt(action.payload.quantity, 10) };
                    }
                    return item;
                });
            } else {
                // Create a new item without mutating the state directly
                const newItem = { ...action.payload, quantity: parseInt(action.payload.quantity, 10) };
                state.cart.push(newItem);
            }
        },
        getCartTotal: (state) => {
            const { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { amount, quantity } = cartItem;
                    const itemTotal = parseFloat(amount.replace(',', '')) * quantity; // Parse amount to number
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalQuantity = totalQuantity;
            state.totalPrice = parseFloat(totalPrice.toFixed(2));
        },

        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter((item) => item.id !== itemId);
            state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cart.reduce((total, item) => {
                const itemTotal = parseFloat(item.amount.replace(',', '')) * item.quantity;
                return total + itemTotal;
            }, 0);
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;