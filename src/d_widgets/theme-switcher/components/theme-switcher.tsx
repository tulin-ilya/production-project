import { memo } from "react";
import cn from "classnames";

import { LIGHT } from "@shared/configs/theme-config";
import { Button } from "@shared/ui-components/button";
import { MoonIcon } from "@shared/ui-components/icons/moon-icon";
import { SunIcon } from "@shared/ui-components/icons/sun-icon";
import { useTheme } from "@app/providers/theme-provider";

import { TThemeSwitcherProps } from "./models";
import styles from "./styles.module.css";

export const ThemeSwitcher = memo(({ className }: TThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div
            className={cn(styles["theme-switcher"], className)}
            onClick={toggleTheme}
        >
            <Button>{theme === LIGHT ? <MoonIcon /> : <SunIcon />}</Button>
        </div>
    );
});
