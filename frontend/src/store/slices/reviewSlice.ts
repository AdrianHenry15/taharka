import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReviewState {
    newReview: boolean;
}

export const reviewSlice = createSlice({
    name: "review",
    initialState: {
        newReview: false,
    } as ReviewState,
    reducers: {
        setNewReview: (state, action: PayloadAction<boolean>) => {
            state.newReview = action.payload;
        },
    },
});

export const { setNewReview } = reviewSlice.actions;
export default reviewSlice.reducer;
