import type { TCounterState } from "@entities/counter";
import { TUserState } from "@entities/user";
import { TLoginState } from "@features/auth-by-username";
import { DeepPartial } from "@reduxjs/toolkit";

export type TStateSchema = {
    counter: TCounterState;
    user: TUserState;
    login?: TLoginState;
};

export type TStoreProviderProps = {
    children?: React.ReactNode;
    initialState?: DeepPartial<TStateSchema>;
};
