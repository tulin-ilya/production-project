import { TStateSchema } from "@app/providers/store-provider";

export const getLoginState = (state: TStateSchema) =>
    state?.login || { username: "", password: "", isLoading: false };
