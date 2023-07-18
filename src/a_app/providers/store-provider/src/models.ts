import type { TCounterState } from "@entities/counter";

export type TStateSchema = {
    counter: TCounterState;
};

export type TStoreProviderProps = {
    children?: React.ReactNode;
    initialState?: TStateSchema;
};
