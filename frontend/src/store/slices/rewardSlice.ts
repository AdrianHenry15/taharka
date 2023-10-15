import { createSlice } from "@reduxjs/toolkit";

export const rewardSlice = createSlice({
    name: "rewards",
    initialState: {
        points: 0,
    },
    reducers: {
        addPoints: (state, action) => {
            state.points += action.payload;
        },
        subtractPoints: (state, action) => {
            state.points -= action.payload;
        },
    },
});

export const { addPoints, subtractPoints } = rewardSlice.actions;

export default rewardSlice.reducer;
