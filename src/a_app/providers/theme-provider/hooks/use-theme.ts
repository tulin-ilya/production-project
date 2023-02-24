import {
    DARK,
    LIGHT,
    LOCAL_STORAGE_THEME_KEY,
} from "@shared/configs/theme-config";
import { useCallback, useContext } from "react";

import { ThemeContext } from "../components/theme-context";
import type { TTheme, TThemeContextProps } from "../models";

type TUseTheme = {
    theme?: TTheme;
    toggleTheme: () => void;
};

export const useTheme = (): TUseTheme => {
    const { setTheme, theme } = useContext(ThemeContext) as TThemeContextProps;

    const toggleTheme = useCallback(() => {
        const newTheme = theme === DARK ? LIGHT : DARK;
        // TODO
        // @ts-ignore
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme, setTheme]);

    return {
        theme,
        toggleTheme,
    };
};
