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
                className={cn(
                    styles["sidebar"],
                    { [styles.collapsed]: collapsed },
                    styles[view],
                    className
                )}
            >
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <button onClick={onToggle}>toggle</button>
            </div>
        );
    }
);
