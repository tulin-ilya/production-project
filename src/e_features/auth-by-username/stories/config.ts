import { TLoginModalProps } from "../src/components/login-modal/models";
import { initialState } from "../src/store/config";
import { loginReducer } from "../src/store/login-slice";
import { TLoginState } from "../src/store/models";

export const ARGS: TLoginModalProps = {
    isOpen: true,
};

export const ARGS_TYPES = {};

export const store = { login: initialState };
export const asyncReducers = { login: loginReducer };
