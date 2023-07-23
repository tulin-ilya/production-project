/* eslint-disable no-unused-vars */
import { TStateSchemaKey } from "@app/providers/store-provider/src/models";
import type { Reducer } from "@reduxjs/toolkit";
import type { ReactNode } from "react";

export type TReducersList = {
    [name in TStateSchemaKey]?: Reducer;
};

export type TReducersListEntry = [TStateSchemaKey, Reducer];

export type TDynamicModuleLoaderProps = {
    children: ReactNode;
    reducers: TReducersList;
    removeReducerAfterUnmount?: boolean;
};
