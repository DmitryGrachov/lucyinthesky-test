import { createSlice } from '@reduxjs/toolkit';
import { IItemForCart } from '../interfaces/item.interface';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const itemExists: any = state.find(
                (item: IItemForCart) => item?.id === action?.payload?.id
            );
            if (itemExists) {
                itemExists.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item: any = state.find(
                (item: IItemForCart) => item?.id === action?.payload
            );
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item: any = state.find(
                (item: IItemForCart) => item?.id === action?.payload
            );
            if (item.quantity === 1) {
                const index = state.findIndex(
                    (item: IItemForCart) => item?.id === action?.payload
                );
                state.splice(index, 1);
            } else {
                item.quantity--;
            }
        },
        removeFromCart: (state, action) => {
            const index: number = state.findIndex(
                (item: IItemForCart) => item?.id === action?.payload
            );
            state.splice(index, 1);
        },
        removeAllCart: (state) => {
            state.splice(0, state.length);
        },
    },
});

export const cartReducer = cartSlice.reducer;

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    removeAllCart,
} = cartSlice.actions;
