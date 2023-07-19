import type { TCounterState } from "@entities/counter";
import { TUserState } from "@entities/user";
import { DeepPartial } from "@reduxjs/toolkit";

export type TStateSchema = {
    counter: TCounterState;
    user: TUserState;
};

export type TStoreProviderProps = {
    children?: React.ReactNode;
    initialState?: DeepPartial<TStateSchema>;
};
