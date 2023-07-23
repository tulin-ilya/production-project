import { ReducersMapObject } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { createReduxStore } from "./create-redux-store";
import type { TStateSchema, TStoreProviderProps } from "./models";

export const StoreProvider = ({
    children,
    initialState,
    asyncReducers,
}: TStoreProviderProps) => {
    const store = createReduxStore(
        initialState as TStateSchema,
        asyncReducers as ReducersMapObject<TStateSchema>
    );

    return <Provider store={store}>{children}</Provider>;
};
