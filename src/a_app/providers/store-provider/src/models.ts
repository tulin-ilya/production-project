import type { TCounterState } from "@entities/counter";
import { DeepPartial } from "@reduxjs/toolkit";

export type TStateSchema = {
    counter: TCounterState;
};

export type TStoreProviderProps = {
    children?: React.ReactNode;
    initialState?: DeepPartial<TStateSchema>;
};
