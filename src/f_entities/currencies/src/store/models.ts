export type TCurrency = "RUB" | "EUR" | "USD";

export type TCurrencies = { id: string; name: TCurrency }[];

export type TCurrenciesState = {
    data?: TCurrencies;
    isLoading: boolean;
    error?: string;
};
