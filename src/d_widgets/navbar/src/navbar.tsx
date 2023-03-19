import { LangSwitcher } from "@widgets/lang-switcher";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import cn from "classnames";
import { memo } from "react";

import { TNavbarProps } from "./models";
import styles from "./styles.module.css";

export const Navbar = memo(
    ({ className, view = "secondary" }: TNavbarProps) => {
        return (
            <div className={cn(styles.navbar, styles[view], className)}>
                <div className={cn(styles["navbar-container"])}></div>
                <div className={cn(styles["navbar-container"])}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        );
    }
);
