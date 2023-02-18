import type { DARK, LIGHT } from "@shared/config/theme-config";

export type TTheme = typeof LIGHT | typeof DARK;

export type TThemeContextProps = {
    theme?: TTheme;
    setTheme?: (theme: TTheme) => void;
};
