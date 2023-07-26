import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchProfileData } from "../services/fetch-profile-data";
import { initialState } from "./config";
import { TProfile, TProfileState } from "./models";

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<TProfile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
