import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./config";
import { TProfile } from "./models";

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
