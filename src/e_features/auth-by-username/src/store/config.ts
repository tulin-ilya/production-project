import type { TLoginState } from "./models";

export const initialState: TLoginState = {
    isLoading: false,
    password: "",
    username: "",
};
