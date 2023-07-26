import type { TStateSchema } from "@app/providers/store-provider";

import { initialState } from "./config";

export const getLoginState = (state: TStateSchema) =>
    state?.login || initialState;
