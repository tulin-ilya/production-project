import { counterReducer } from "@entities/counter";
import { userReducer } from "@entities/user";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";

import type { TStateSchema } from "./models";

export function createReduxStore(initialState?: TStateSchema) {
    const rootReducer: ReducersMapObject<TStateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<TStateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV,
        preloadedState: initialState,
    });
}
