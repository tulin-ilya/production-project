import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCountriesData } from "../services/fetch-countries-data";
import { initialState } from "./config";
import { TCountries } from "./models";

export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchCountriesData.fulfilled,
                (state, action: PayloadAction<TCountries>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(fetchCountriesData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCountriesData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: countriesActions } = countriesSlice;
export const { reducer: countriesReducer } = countriesSlice;
