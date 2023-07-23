import type { ReducersMapObject } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import type { TReducerManager, TStateSchema, TStateSchemaKey } from "./models";

export const createReducerManager = (
    initialReducers: ReducersMapObject<TStateSchema>
): TReducerManager => {
    const reducers = { ...initialReducers };

    let combinedReducers = combineReducers(reducers);

    let keysToRemove: TStateSchemaKey[] = [];

    return {
        getReducerMap: () => reducers,
        reduce: (state, action) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducers(state, action);
        },
        add: (key, reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducers = combineReducers(reducers);
        },
        remove: (key) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducers = combineReducers(reducers);
        },
    };
};
