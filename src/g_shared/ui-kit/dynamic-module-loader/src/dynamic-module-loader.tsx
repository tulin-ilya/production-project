import { TReduxStoreWithManager } from "@app/providers/store-provider";
import { TStateSchemaKey } from "@app/providers/store-provider/src/models";
import { memo, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

import { TDynamicModuleLoaderProps } from "./models";

export const DynamicModuleLoader = memo(
    ({
        children,
        reducers,
        removeReducerAfterUnmount = false,
    }: TDynamicModuleLoaderProps) => {
        const dispatch = useDispatch();
        const store = useStore() as TReduxStoreWithManager;

        useEffect(() => {
            Object.entries(reducers).forEach(([name, reducer]) => {
                store.reducerManager.add(name as TStateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            });

            return () => {
                if (removeReducerAfterUnmount) {
                    Object.entries(reducers).forEach(([name]) => {
                        store.reducerManager.remove(name as TStateSchemaKey);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    });
                }
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return <>{children}</>;
    }
);
