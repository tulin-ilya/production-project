import type { TStateSchema } from "@app/providers/store-provider";

import { initialState } from "./config";

export const getCountriesState = (state: TStateSchema) =>
    state.countries || initialState;
