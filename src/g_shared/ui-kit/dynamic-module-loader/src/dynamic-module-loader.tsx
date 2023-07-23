import { TReduxStoreWithManager } from "@app/providers/store-provider";
import { memo, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

import { TDynamicModuleLoaderProps, TReducersListEntry } from "./models";

export const DynamicModuleLoader = memo(
    ({
        children,
        reducers,
        removeReducerAfterUnmount = false,
    }: TDynamicModuleLoaderProps) => {
        const dispatch = useDispatch();
        const store = useStore() as TReduxStoreWithManager;

        useEffect(() => {
            Object.entries(reducers).forEach(
                ([name, reducer]: TReducersListEntry) => {
                    store.reducerManager.add(name, reducer);
                    dispatch({ type: `@INIT ${name} reducer` });
                }
            );

            return () => {
                if (removeReducerAfterUnmount) {
                    Object.entries(reducers).forEach(
                        ([name]: TReducersListEntry) => {
                            store.reducerManager.remove(name);
                            dispatch({ type: `@DESTROY ${name} reducer` });
                        }
                    );
                }
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return <>{children}</>;
    }
);
