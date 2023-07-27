import type { TThunkConfig } from "@app/providers/store-provider";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TProfile } from "../store/models";

export const fetchProfileData = createAsyncThunk<
    TProfile,
    void,
    TThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.get<TProfile>("/profile");

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);

        return rejectWithValue("error");
    }
});
