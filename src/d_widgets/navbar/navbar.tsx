import { AppLink } from "@shared/ui-kit/app-link";
import { LangSwitcher } from "@widgets/lang-switcher";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import cn from "classnames";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import { TNavbarProps } from "./models";
import styles from "./styles.module.css";

export const Navbar = memo(
    ({ className, view = "secondary" }: TNavbarProps) => {
        const { t } = useTranslation("navbar");

        return (
            <div className={cn(styles.navbar, styles[view], className)}>
                <div className={cn(styles["navbar-container"])}></div>
                <div className={cn(styles["navbar-container"])}>
                    <AppLink view="secondary" to="/">
                        {t("home")}
                    </AppLink>
                    <AppLink view="secondary" to="/about">
                        {t("about")}
                    </AppLink>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
            </div>
        );
    }
);
