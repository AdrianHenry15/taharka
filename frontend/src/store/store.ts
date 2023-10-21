import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import cartSlice from "./slices/cartSlice";
import modalSlice from "./slices/modalSlice";
import pageSlice from "./slices/pageSlice";
import productSlice from "./slices/productSlice";
import reviewSlice from "./slices/reviewSlice";
import wishlistSlice from "./slices/wishlistSlice";
import rewardSlice from "./slices/rewardSlice";
import storeLocationSlice from "./slices/storeLocationSlice";
import userLocationSlice from "./slices/userLocationSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        modal: modalSlice,
        currentPage: pageSlice,
        product: productSlice,
        review: reviewSlice,
        user: userSlice,
        wishlist: wishlistSlice,
        rewards: rewardSlice,
        storeLocation: storeLocationSlice,
        userLocation: userLocationSlice,
    },
});

export type Dispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export default store;
