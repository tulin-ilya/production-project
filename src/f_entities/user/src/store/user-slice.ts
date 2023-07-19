import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./config";

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
