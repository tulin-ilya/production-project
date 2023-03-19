import { AppLink } from "@shared/ui-kit/app-link";
import { Button } from "@shared/ui-kit/button";
import { AboutIcon } from "@shared/ui-kit/icons/about-icon";
import { ArrowIcon } from "@shared/ui-kit/icons/arrow-icon";
import { HomeIcon } from "@shared/ui-kit/icons/home-icon";
import cn from "classnames";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import { useSidebar } from "./hooks/use-sidebar";
import { TSidebarProps } from "./models";
import styles from "./styles.module.scss";

export const Sidebar = memo(
    ({ className, view = "secondary" }: TSidebarProps) => {
        const { collapsed, onToggle } = useSidebar();
        const { t } = useTranslation("sidebar");

        return (
            <div
                data-testid={"sidebar"}
                className={cn(
                    styles["sidebar"],
                    { [styles.collapsed]: collapsed },
                    styles[view],
                    className
                )}
            >
                <div className={cn(styles["link-container"])}>
                    <AppLink view="secondary" to="/">
                        <HomeIcon />
                        {!collapsed ? t("home") : null}
                    </AppLink>
                    <AppLink view="secondary" to="/about">
                        <AboutIcon />
                        {!collapsed ? t("about") : null}
                    </AppLink>
                </div>
                <div className={styles["cell-container"]}>
                    <Button
                        data-testid={"sidebar-toggler"}
                        view="clear"
                        onClick={onToggle}
                    >
                        <ArrowIcon direction={collapsed ? "left" : "right"} />
                    </Button>
                </div>
            </div>
        );
    }
);
