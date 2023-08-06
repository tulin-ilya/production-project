import type { TCountry } from "@entities/countries";
import type { TCurrency } from "@entities/currencies";

export type TProfile = {
    firstname?: string;
    lastname?: string;
    age?: string;
    currency?: TCurrency;
    country?: TCountry;
    city?: string;
    username?: string;
    avatar?: string;
};

export type TProfileState = {
    data?: TProfile;
    currentData?: TProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
};
