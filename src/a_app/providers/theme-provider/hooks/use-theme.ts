import {
    DARK,
    LIGHT,
    LOCAL_STORAGE_THEME_KEY,
} from "@shared/configs/theme-config";
import { useCallback, useContext } from "react";

import type { TTheme } from "../models";
import { ThemeContext } from "../theme-context";

type TUseTheme = {
    theme?: TTheme;
    toggleTheme: () => void;
};

export const useTheme = (): TUseTheme => {
    const { setTheme, theme } = useContext(ThemeContext);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === DARK ? LIGHT : DARK;
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme, setTheme]);

    return {
        theme,
        toggleTheme,
    };
};
