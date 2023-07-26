import type { TThunkConfig } from "@app/providers/store-provider";
import type { TUser } from "@entities/user";
import { userActions } from "@entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCAL_STORAGE_KEY } from "@shared/consts/local-storege";

import type { TLoginByUsername } from "./models";

export const loginByUsername = createAsyncThunk<
    TUser,
    TLoginByUsername,
    TThunkConfig<string>
>("login/loginByUsername", async ({ username, password }, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post<TUser>("/login", {
            username,
            password,
        });

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(response.data)
        );

        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        console.log(e);

        return rejectWithValue("error");
    }
});
