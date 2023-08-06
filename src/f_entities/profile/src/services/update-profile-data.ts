import type { TThunkConfig } from "@app/providers/store-provider";
import { createAsyncThunk } from "@reduxjs/toolkit";

import type { TProfile } from "../store/models";
import { getProfileState } from "../store/selectors";

export const updateProfileData = createAsyncThunk<
    TProfile,
    void,
    TThunkConfig<string>
>("profile/updateProfileData", async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const { currentData } = getProfileState(getState());

    try {
        const response = await extra.api.put<TProfile>("/profile", currentData);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);

        return rejectWithValue("error");
    }
});
