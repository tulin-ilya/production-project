import { LoginModal } from "@features/auth-by-username";
import { AppLink } from "@shared/ui-kit/app-link";
import { Button } from "@shared/ui-kit/button";
import { ProfileIcon } from "@shared/ui-kit/icons/profile-icon";
import { Portal } from "@shared/ui-kit/portal";
import { LangSwitcher } from "@widgets/lang-switcher";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import cn from "classnames";
import { memo } from "react";

import { useNavbar } from "./hooks/use-navbar";
import type { TNavbarProps } from "./models";
import styles from "./styles.module.css";

export const Navbar = memo(
    ({ className, view = "secondary" }: TNavbarProps) => {
        const { authData, isAuthOpen, onLogout, onToggleAuth, t } = useNavbar();

        return (
            <div className={cn(styles.navbar, styles[view], className)}>
                <div className={cn(styles["navbar-container"])}></div>
                <div className={cn(styles["navbar-container"])}>
                    {!authData ? (
                        <Button view="primary" onClick={onToggleAuth}>
                            {t("sign-in")}
                        </Button>
                    ) : (
                        <>
                            <AppLink view="secondary" to="/profile">
                                <ProfileIcon />
                            </AppLink>
                            <Button view="secondary" onClick={onLogout}>
                                {t("sign-out")}
                            </Button>
                        </>
                    )}
                    <LangSwitcher />
                    <ThemeSwitcher />
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
