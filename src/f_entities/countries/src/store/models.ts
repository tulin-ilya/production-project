export type TCountry =
    | "Russia"
    | "Ukraine"
    | "USA"
    | "Belarus"
    | "Kazakhstan"
    | "Armenia"
    | "Georgia"
    | "Great Britain"
    | "German";

export type TCountries = { id: string; name: TCountry }[];

export type TCountriesState = {
    data?: TCountries;
    isLoading: boolean;
    error?: string;
};
