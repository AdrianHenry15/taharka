import { createSlice } from "@reduxjs/toolkit";

export const userLocationSlice = createSlice({
    name: "userLocation",
    initialState: {
        location: {
            city: "",
            address: "",
            state: "",
        },
    },
    reducers: {
        setNewUserLocation: (state, action) => {
            state.location = action.payload;
        },
    },
});

export const { setNewUserLocation } = userLocationSlice.actions;

export default userLocationSlice.reducer;
