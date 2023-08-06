import type { TThunkConfig } from "@app/providers/store-provider";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TCurrencies } from "../store/models";

export const fetchCurrenciesData = createAsyncThunk<
    TCurrencies,
    void,
    TThunkConfig<string>
>("currencies/fetchCurrenciesData", async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<TCurrencies>("/currencies");

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);

        return rejectWithValue("error");
    }
});
