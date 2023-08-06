import type { TStateSchema } from "@app/providers/store-provider";

import { initialState } from "./config";

export const getCurenciesState = (state: TStateSchema) =>
    state.currencies || initialState;
