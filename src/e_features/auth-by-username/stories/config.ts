import { TLoginModalProps } from "../src/components/login-modal/models";
import { loginReducer } from "../src/store/login-slice";

export const ARGS: TLoginModalProps = {
    isOpen: true,
};

export const ARGS_TYPES = {};

export const store = { login: {} };
export const asyncReducers = { login: loginReducer };
