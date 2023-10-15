import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        updateProduct: (state, action) => {
            state.products = action.payload;
        },
    }
})

export const {
    updateProduct,
} = productSlice.actions;

export default productSlice.reducer;