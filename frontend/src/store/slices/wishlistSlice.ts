import { createSlice } from "@reduxjs/toolkit";

interface Product {
    _id: string;
}

interface WishlistState {
    wishlist: Product[];
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlist: [],
    } as WishlistState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((product) => product._id !== action.payload);
        },
        updateWishlist: (state, action) => {
            state.wishlist = action.payload;
        },
    },
});

export const { addToWishlist, removeFromWishlist, updateWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
