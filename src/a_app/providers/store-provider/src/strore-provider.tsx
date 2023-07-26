import { ReducersMapObject } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createReduxStore } from "./create-redux-store";
import type { TStateSchema, TStoreProviderProps } from "./models";

export const StoreProvider = ({
    children,
    initialState,
    asyncReducers,
}: TStoreProviderProps) => {
    const navigate = useNavigate();
    const store = createReduxStore(
        initialState as TStateSchema,
        asyncReducers as ReducersMapObject<TStateSchema>,
        navigate
    );

    return <Provider store={store}>{children}</Provider>;
};
