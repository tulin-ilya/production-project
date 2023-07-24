import type { TCountry, TCurrency } from "@shared/configs/common-types";

export type TProfile = {
    firstname: string;
    lastname: string;
    age: number;
    currency: TCurrency;
    country: TCountry;
    city: string;
    username: string;
    avatar: string;
};

export type TProfileState = {
    data?: TProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
};
