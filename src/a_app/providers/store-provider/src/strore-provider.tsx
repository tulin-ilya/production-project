import { Provider } from "react-redux";

import { createReduxStore } from "./create-redux-store";
import type { TStateSchema, TStoreProviderProps } from "./models";

export const StoreProvider = ({
    children,
    initialState,
}: TStoreProviderProps) => {
    const store = createReduxStore(initialState as TStateSchema);

    return <Provider store={store}>{children}</Provider>;
};
