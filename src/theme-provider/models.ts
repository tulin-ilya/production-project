import type { DARK, LIGHT } from "./config";

export type TTheme = typeof LIGHT | typeof DARK;

export type TThemeContextProps = {
    theme?: TTheme;
    setTheme?: (theme: TTheme) => void;
};
