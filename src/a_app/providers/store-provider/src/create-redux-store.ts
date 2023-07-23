import { counterReducer } from "@entities/counter";
import { userReducer } from "@entities/user";
import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import type { TStateSchema } from "./models";
import { createReducerManager } from "./reducer-manager";

export function createReduxStore(
    initialState?: TStateSchema,
    asyncReducers?: ReducersMapObject<TStateSchema>
) {
    const rootReducer: ReducersMapObject<TStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<TStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
