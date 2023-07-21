import i18n from "@config/i18n";
import { TUser, userActions } from "@entities/user";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCAL_STORAGE_KEY } from "@shared/consts/local-storege";
import axios from "axios";

import { TLoginByUsername } from "./models";

export const loginByUsername = createAsyncThunk<
    TUser,
    TLoginByUsername,
    { rejectValue: string }
>("login/loginByUsername", async ({ username, password }, thunkAPI) => {
    try {
        const response = await axios.post<TUser>(
            "http://localhost:8000/login",
            {
                username,
                password,
            }
        );

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(response.data)
        );

        thunkAPI.dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (e) {
        console.log(e);

        return thunkAPI.rejectWithValue(
            i18n.t("incorrect username or password")
        );
    }
});
