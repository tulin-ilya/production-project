import { countriesReducer } from "@entities/countries";
import { currenciesReducer } from "@entities/currencies";
import { userReducer } from "@entities/user";
import type {
    CombinedState,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { $api } from "@shared/api/api";
import type { NavigateOptions, To } from "react-router-dom";

import type { TStateSchema, TThunkExtraArguments } from "./models";
import { createReducerManager } from "./reducer-manager";

export function createReduxStore(
    initialState?: TStateSchema,
    asyncReducers?: ReducersMapObject<TStateSchema>,
    // eslint-disable-next-line no-unused-vars
    navigate?: (to: To, option?: NavigateOptions) => void
) {
    const rootReducer: ReducersMapObject<TStateSchema> = {
        ...asyncReducers,
        countries: countriesReducer,
        currencies: currenciesReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgument: TThunkExtraArguments = { api: $api, navigate };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<TStateSchema>>,
        devTools: __IS_DEV,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument,
                },
            }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
