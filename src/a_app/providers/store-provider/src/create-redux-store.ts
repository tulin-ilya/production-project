import { counterReducer } from "@entities/counter";
import { configureStore } from "@reduxjs/toolkit";

import type { TStateSchema } from "./models";

export function createReduxStore(initialState?: TStateSchema) {
    return configureStore<TStateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV,
        preloadedState: initialState,
    });
}
