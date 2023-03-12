/* eslint-disable i18next/no-literal-string */
import { Button } from "@shared/ui-kit/button";
import cn from "classnames";
import { memo } from "react";

import { useSidebar } from "./hooks/use-sidebar";
import { TSidebarProps } from "./models";
import styles from "./styles.module.css";

export const Sidebar = memo(
    ({ className, view = "secondary" }: TSidebarProps) => {
        const { collapsed, onToggle } = useSidebar();

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
                <Button
                    data-testid={"sidebar-toggler"}
                    view="normal"
                    onClick={onToggle}
                >
                    toggle
                </Button>
            </div>
        );
    }
);
