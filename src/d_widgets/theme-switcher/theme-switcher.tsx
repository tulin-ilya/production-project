import { useTheme } from "@app/providers/theme-provider";
import { LIGHT } from "@shared/configs/theme-config";
import { Button } from "@shared/ui-kit/button";
import { MoonIcon } from "@shared/ui-kit/icons/moon-icon";
import { SunIcon } from "@shared/ui-kit/icons/sun-icon";
import { memo } from "react";

import { TThemeSwitcherProps } from "./models";

export const ThemeSwitcher = memo(({ className }: TThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={className} onClick={toggleTheme}>
            <Button>{theme === LIGHT ? <MoonIcon /> : <SunIcon />}</Button>
        </div>
    );
});
