import { createContext } from "react";

import type { TThemeContextProps } from "../models";

export const ThemeContext = createContext<TThemeContextProps>({});
