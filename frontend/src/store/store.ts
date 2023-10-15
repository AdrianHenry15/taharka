import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import modalSlice from "./slices/modalSlice";
import pageSlice from "./slices/pageSlice";
import productSlice from "./slices/productSlice";
import reviewSlice from "./slices/reviewSlice";
import wishlistSlice from "./slices/wishlistSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        modal: modalSlice,
        page: pageSlice,
        product: productSlice,
        review: reviewSlice,
        user: userSlice,
        wishlist: wishlistSlice,
    },
});

export default store;

export type Dispatch = typeof store.dispatch;
export type State = typeof store.getState;
