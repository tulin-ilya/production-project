import { Button } from "@shared/ui-kit/button";
import { Portal } from "@shared/ui-kit/portal";
import { LangSwitcher } from "@widgets/lang-switcher";
import { Modal } from "@widgets/modal";
import { ThemeSwitcher } from "@widgets/theme-switcher";
import cn from "classnames";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { TNavbarProps } from "./models";
import styles from "./styles.module.css";

export const Navbar = memo(
    ({ className, view = "secondary" }: TNavbarProps) => {
        const { t } = useTranslation("navbar");
        const [isAuthOpen, setIsAuthOpen] = useState(false);

        const onToggleAuth = useCallback(() => {
            setIsAuthOpen((prev) => !prev);
        }, []);

        return (
            <div className={cn(styles.navbar, styles[view], className)}>
                <div className={cn(styles["navbar-container"])}></div>
                <div className={cn(styles["navbar-container"])}>
                    <ThemeSwitcher />
                    <Button view="primary" onClick={onToggleAuth}>
                        {t("sign-in")}
                    </Button>
                    <LangSwitcher />
                </div>
                <Portal>
                    {/* eslint-disable-next-line i18next/no-literal-string */}
                    <Modal isOpen={isAuthOpen} onClose={onToggleAuth}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aperiam quis ex aliquam, corrupti et nemo ipsum,
                        ut dicta omnis, tempore voluptatibus veniam. Quia
                        repellendus expedita tempore asperiores atque accusamus
                        laudantium.
                    </Modal>
                </Portal>
            </div>
        );
    }
);
