import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchCurrenciesData } from "../services/fetch-currencies-data";
import { initialState } from "./config";
import { TCurrencies } from "./models";

export const currenciesSlice = createSlice({
    name: "currencies",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchCurrenciesData.fulfilled,
                (state, action: PayloadAction<TCurrencies>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                }
            )
            .addCase(fetchCurrenciesData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCurrenciesData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: currenciesActions } = currenciesSlice;
export const { reducer: currenciesReducer } = currenciesSlice;
