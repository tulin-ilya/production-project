import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchProfileData } from "../services/fetch-profile-data";
import { updateProfileData } from "../services/update-profile-data";
import { initialState } from "./config";
import { TProfile } from "./models";

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        updateProfile: (state, action: PayloadAction<TProfile>) => {
            state.currentData = { ...state.currentData, ...action.payload };
        },
        cancelChanges: (state) => {
            state.readonly = true;
            state.currentData = state.data;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchProfileData.fulfilled,
                (state, action: PayloadAction<TProfile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.currentData = action.payload;
                }
            )
            .addCase(fetchProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(
                updateProfileData.fulfilled,
                (state, action: PayloadAction<TProfile>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.currentData = action.payload;
                }
            )
            .addCase(updateProfileData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
