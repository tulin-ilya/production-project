import { TStateSchema } from "@app/providers/store-provider";
import { userActions } from "@entities/user";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";

import { loginByUsername } from "../src/services/login-by-username";

jest.mock("axios");

const mockedAxios = jest.mocked(axios, true);

const api = mockedAxios;
const navigate = jest.fn();

describe("loginByUsername", () => {
    let dispatch: Dispatch;
    let getState: () => TStateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });
    it("Успешная авторизация", async () => {
        const userValue = { username: "admin", id: "1" };
        api.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const action = loginByUsername({ password: "123", username: "admin" });
        const result = await action(dispatch, getState, { api, navigate });

        expect(api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(userValue);
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenCalledWith(
            userActions.setAuthData(userValue)
        );
    });

    it("Сервер прислал ошибку", async () => {
        api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const action = loginByUsername({ password: "123", username: "admin" });
        const result = await action(dispatch, getState, { api, navigate });

        expect(api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual("error");
        expect(dispatch).toHaveBeenCalledTimes(2);
    });
});
