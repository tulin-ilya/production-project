import { memo } from "react";
import cn from "classnames";

import { AppLink } from "@shared/ui-components/app-link";
import { ThemeSwitcher } from "@widgets/theme-switcher";

import { TNavbarProps } from "./models";
import styles from "./styles.module.css";

export const Navbar = memo<TNavbarProps>(
    ({ className, view = "secondary" }) => {
        return (
            <div className={cn(styles.navbar, styles[view], className)}>
                <div className={cn(styles["navbar-container"])}></div>
                <div className={cn(styles["navbar-container"])}>
                    <AppLink view="secondary" to={"/"}>
                        home
                    </AppLink>
                    <AppLink view="secondary" to={"/about"}>
                        about
                    </AppLink>
                    <ThemeSwitcher />
                </div>
            </div>
        );
    }
);
