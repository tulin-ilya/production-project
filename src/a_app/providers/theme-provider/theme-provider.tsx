import { LIGHT, LOCAL_STORAGE_THEME_KEY } from "@shared/configs/theme-config";
import { ReactNode, useEffect, useMemo, useState } from "react";

import type { TTheme } from "./models";
import { ThemeContext } from "./theme-context";

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme) || LIGHT;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<TTheme>(defaultTheme);

    const defaultValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    useEffect(() => {
        document.body.className = theme;
    }, []);

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};
