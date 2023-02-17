import { useMemo, useState } from "react";
import type { FC } from "react";

import type { TTheme } from "./models";
import { LIGHT, LOCAL_STORAGE_THEME_KEY } from "./config";
import { ThemeContext } from "./theme-context";

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme) || LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState<TTheme>(defaultTheme);

    const defaultValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme, setTheme]
    );

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    );
};
