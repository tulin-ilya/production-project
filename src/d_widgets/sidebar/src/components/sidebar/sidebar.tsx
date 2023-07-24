import { Button } from "@shared/ui-kit/button";
import { ArrowIcon } from "@shared/ui-kit/icons/arrow-icon";
import cn from "classnames";
import { memo, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { useSidebar } from "../../hooks/use-sidebar";
import { SidebarLink } from "../sidebar-link/sidebar-link";
import { sidebarLinksList } from "./config";
import type { TSidebarProps } from "./models";
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
                    {sidebarLinksList.map((item) => (
                        <SidebarLink
                            key={item.label}
                            label={t(item.label)}
                            path={item.path}
                            icon={item.icon}
                            collapsed={collapsed}
                        />
                    ))}
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
