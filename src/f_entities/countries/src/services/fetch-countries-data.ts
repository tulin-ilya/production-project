import type { TThunkConfig } from "@app/providers/store-provider";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TCountries } from "../store/models";

export const fetchCountriesData = createAsyncThunk<
    TCountries,
    void,
    TThunkConfig<string>
>("countries/fetchCountriesData", async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<TCountries>("/countries");

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);

        return rejectWithValue("error");
    }
});
