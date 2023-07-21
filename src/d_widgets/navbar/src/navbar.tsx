import { getUserAuthData, userActions } from "@entities/user";
import { LoginModal } from "@features/auth-by-username";
import { Button } from "@shared/ui-kit/button";
import { Portal } from "@shared/ui-kit/portal";
import { LangSwitcher } from "@widgets/lang-switcher";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import cn from "classnames";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { TNavbarProps } from "./models";
import styles from "./styles.module.css";

export const Navbar = memo(
    ({ className, view = "secondary" }: TNavbarProps) => {
        const { t } = useTranslation("navbar");
        const [isAuthOpen, setIsAuthOpen] = useState(false);
        const authData = useSelector(getUserAuthData);
        const dispatch = useDispatch();

        const onToggleAuth = useCallback(() => {
            setIsAuthOpen((prev) => !prev);
        }, []);

        const onLogout = useCallback(() => {
            dispatch(userActions.logout());
        }, [dispatch]);

        return (
            <div className={cn(styles.navbar, styles[view], className)}>
                <div className={cn(styles["navbar-container"])}></div>
                <div className={cn(styles["navbar-container"])}>
                    <ThemeSwitcher />
                    {!authData ? (
                        <Button view="primary" onClick={onToggleAuth}>
                            {t("sign-in")}
                        </Button>
                    ) : (
                        <Button view="primary" onClick={onLogout}>
                            {t("sign-out")}
                        </Button>
                    )}
                    <LangSwitcher />
                </div>
                <Portal>
                    <LoginModal
                        isOpen={isAuthOpen && !authData}
                        onClose={onToggleAuth}
                    />
                </Portal>
            </div>
        );
    }
);
