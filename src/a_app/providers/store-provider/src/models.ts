/* eslint-disable no-unused-vars */
import { TCountriesState } from "@entities/countries";
import { TCurrenciesState } from "@entities/currencies";
import type { TProfileState } from "@entities/profile";
import type { TUserState } from "@entities/user";
import type { TLoginState } from "@features/auth-by-username";
import type {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import type { AxiosInstance } from "axios";
import type { NavigateOptions, To } from "react-router-dom";

import type { createReduxStore } from "./create-redux-store";

export type TStateSchema = {
    countries: TCountriesState;
    currencies: TCurrenciesState;
    user: TUserState;
    // Асинхронные редьюсеры
    login?: TLoginState;
    profile?: TProfileState;
};

export type TStateSchemaKey = keyof TStateSchema;

export type TStoreProviderProps = {
    children?: React.ReactNode;
    initialState?: Partial<TStateSchema>;
    asyncReducers?: Partial<ReducersMapObject<TStateSchema>>;
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

export type TAppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export type TThunkExtraArguments = {
    api: AxiosInstance;
    navigate?: (to: To, option?: NavigateOptions) => void;
};

export type TThunkConfig<ErrorType> = {
    rejectValue: ErrorType;
    extra: TThunkExtraArguments;
    dispatch: TAppDispatch;
    state: TStateSchema;
};
