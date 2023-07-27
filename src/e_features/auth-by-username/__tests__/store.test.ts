import { TStateSchema } from "@app/providers/store-provider";

import { loginActions, loginReducer } from "../src/store/login-slice";
import { TLoginState } from "../src/store/models";
import { getLoginState } from "../src/store/selectors";

describe("loginSlice", () => {
    it("setUsername", () => {
        const state: Partial<TLoginState> = { username: "admin" };
        expect(
            loginReducer(
                state as TLoginState,
                loginActions.setUsername("admin123")
            )
        ).toEqual({ username: "admin123" });
    });

    it("setPassword", () => {
        const state: Partial<TLoginState> = { password: "admin" };
        expect(
            loginReducer(
                state as TLoginState,
                loginActions.setPassword("admin123")
            )
        ).toEqual({ password: "admin123" });
    });
});

describe("getLoginState", () => {
    it("Должен возвращать валидные значения", () => {
        const state: Partial<TStateSchema> = {
            login: {
                error: "error",
                isLoading: false,
                password: "",
                username: "",
            },
        };
        expect(getLoginState(state as TStateSchema)).toEqual({
            error: "error",
            isLoading: false,
            password: "",
            username: "",
        });
    });

    it("Должен возвращать валидные значения если state пустой", () => {
        const state: Partial<TStateSchema> = {};

        expect(getLoginState(state as TStateSchema)).toEqual({
            isLoading: false,
            password: "",
            username: "",
        });
    });
});
