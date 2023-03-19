import { useTheme } from "@app/providers/theme-provider";
import { LIGHT } from "@shared/configs/theme-config";
import { Button } from "@shared/ui-kit/button";
import { MoonIcon } from "@shared/ui-kit/icons/moon-icon";
import { SunIcon } from "@shared/ui-kit/icons/sun-icon";
import cn from "classnames";
import { memo } from "react";

import { TThemeSwitcherProps } from "./models";
import styles from "./styles.module.css";

export const ThemeSwitcher = memo(({ className }: TThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            view="clear"
            onClick={toggleTheme}
            className={cn(styles["theme-switcher"], className)}
        >
            {theme === LIGHT ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
});
