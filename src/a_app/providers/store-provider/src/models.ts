export type TCounterState = {
    value: number;
};

export type TStateSchema = {
    // counter: TCounterState;
};

export type TStoreProviderProps = {
    children?: React.ReactNode;
    initialState?: TStateSchema;
};
