import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        currentPage: "",
    },
    reducers: {
        updateCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
    }
})

export const {
    updateCurrentPage,
} = pageSlice.actions;

export default pageSlice.reducer;