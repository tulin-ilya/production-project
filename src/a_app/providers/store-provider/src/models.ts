/* eslint-disable no-unused-vars */
import type { TCounterState } from "@entities/counter";
import type { TUserState } from "@entities/user";
import type { TLoginState } from "@features/auth-by-username";
import type {
    AnyAction,
    CombinedState,
    DeepPartial,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";

export type TStateSchema = {
    counter: TCounterState;
    user: TUserState;
    // Асинхронные редьюсеры
    login?: TLoginState;
};

export type TStateSchemaKey = keyof TStateSchema;

export type TStoreProviderProps = {
    children?: React.ReactNode;
    initialState?: DeepPartial<TStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>;
};

export type TReducerManager = {
    getReducerMap: () => ReducersMapObject<TStateSchema>;
    reduce: (
        state: TStateSchema,
        action: AnyAction
    ) => CombinedState<TStateSchema>;
    add: (key: TStateSchemaKey, reducer: Reducer) => void;
    remove: (key: TStateSchemaKey) => void;
};

export type TReduxStoreWithManager = EnhancedStore<TStateSchema> & {
    reducerManager: TReducerManager;
};
