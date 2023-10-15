import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        modal: false,
    },
    reducers: {
        toggle_Modal: (state) => {
            state.modal = !state.modal;
        },
    },
});

export const { toggle_Modal } = modalSlice.actions;

export default modalSlice.reducer;
