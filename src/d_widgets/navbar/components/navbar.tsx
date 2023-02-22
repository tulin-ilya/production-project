import { FC, forwardRef, memo, Ref, useRef } from "react";
import cn from "classnames";

import { AppLink } from "@shared/ui-components/app-link";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import { LangSwitcher } from "@widgets/lang-switcher";

import { TNavbarProps } from "./models";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

export const Navbar = memo(
    forwardRef(
        (
            { className, view = "secondary" }: TNavbarProps,
            ref?: Ref<HTMLDivElement>
        ) => {
            const { t } = useTranslation("navbar");

            return (
                <div
                    className={cn(styles.navbar, styles[view], className)}
                    ref={ref}
                >
                    <div className={cn(styles["navbar-container"])}></div>
                    <div className={cn(styles["navbar-container"])}>
                        <AppLink view="secondary" to={"/"}>
                            {t("home")}
                        </AppLink>
                        <AppLink view="secondary" to={"/about"}>
                            {t("about")}
                        </AppLink>
                        <ThemeSwitcher />
                        <LangSwitcher />
                    </div>
                </div>
            );
        }
    )
);
