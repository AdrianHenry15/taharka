import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Product {
    _id: string;
    quantity: number;
}

interface CartState {
    cart: Product[];
    cartOpen: boolean;
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        cartOpen: false,
    } as CartState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        updateCart: (state, action) => {
            state.cart = action.payload;
        },
        addMultipleToCart: (state, action) => {
            state.cart.push(...action.payload);
        },
        deleteFromCart: (state, action) => {
            let newState = state.cart.filter((product) => {
                return product._id.toString() !== action.payload.toString();
            });
            state.cart = newState;
        },
        updateCartQuantity: (state, action) => {
            const newCart = state.cart.map((product) => {
                if (action.payload._id === product._id) {
                    product.quantity = action.payload.quantity;
                }
                return product;
            });
            state.cart = newCart;
        },
        clearCart: (state) => {
            state.cartOpen = false;
            state.cart = [];
        },
        toggle_Cart: (state) => {
            state.cartOpen = !state.cartOpen;
        },
    },
});

export const { addToCart, addMultipleToCart, deleteFromCart, updateCartQuantity, clearCart, toggle_Cart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
