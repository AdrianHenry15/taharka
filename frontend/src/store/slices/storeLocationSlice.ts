import { createSlice } from "@reduxjs/toolkit";

export const storeLocationSlice = createSlice({
    name: "storeLocation",
    initialState: {
        location: {
            city: "",
            address: "",
            state: "",
        },
    },
    reducers: {
        setNewStoreLocation: (state, action) => {
            state.location = action.payload;
        },
    },
});

export const { setNewStoreLocation } = storeLocationSlice.actions;

export default storeLocationSlice.reducer;
