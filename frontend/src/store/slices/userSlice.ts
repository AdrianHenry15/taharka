import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { State } from "../store";

interface UserState {
    _id: string | null;
    user: {
        _id?: string | null;
        name?: string;
        number?: string;
        email?: string;
        birthday?: string;
        isAdmin?: boolean;
        isVerified?: boolean;
        accountUrl?: string;
    };
    access_token: string | null;
    isLoggedIn: boolean;
    notifications: [] | object[];
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "{}") : {},
        access_token: localStorage.getItem("access_token") ? JSON.parse(localStorage.getItem("access_token") || "") : null,
        isLoggedIn: localStorage.getItem("user") ? true : false,
    } as UserState,
    reducers: {
        user_login: (state, action: PayloadAction<object>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        user_logout: (state) => {
            state.user = {};
            state.access_token = null;
            state.isLoggedIn = false;
        },
        setAccessToken: (state, action: PayloadAction<string>) => {
            state.access_token = action.payload;
        },
    },
});

export const { user_login, user_logout, setAccessToken } = userSlice.actions;

export const selectUser = (state: State) => state.user;

export default userSlice.reducer;
