import { AppLink } from "@shared/ui-kit/app-link";
import { LangSwitcher } from "@widgets/lang-switcher";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import cn from "classnames";
import { forwardRef, memo, Ref } from "react";
import { useTranslation } from "react-i18next";

import { TNavbarProps } from "./models";
import styles from "./styles.module.css";

const NavbarComponent = forwardRef(
    (
        { className, view = "secondary" }: TNavbarProps,
        ref?: Ref<HTMLDivElement>
    ) => {
        const { t } = useTranslation("navbar");
        // console.log(ref);

        return (
            <div
                className={cn(styles.navbar, styles[view], className)}
                ref={ref}
            >
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

export const Navbar = memo(NavbarComponent);
