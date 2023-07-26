import type { TStateSchema } from "@app/providers/store-provider";

import { initialState } from "./config";

export const getProfileState = (state: TStateSchema) =>
    state.profile || initialState;
