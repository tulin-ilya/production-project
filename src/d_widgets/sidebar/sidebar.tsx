import cn from "classnames";
import { memo, useEffect, useRef, useState } from "react";

import { TSidebarProps } from "./models";
import styles from "./styles.module.css";

export const Sidebar = memo(
    ({ className, view = "secondary", upperOffset }: TSidebarProps) => {
        const sidebarRef = useRef<HTMLDivElement>(null);
        const [collapsed, setCollapsed] = useState(false);

        const onToggle = () => {
            setCollapsed((prev) => !prev);
        };

        return (
            <div
                ref={sidebarRef}
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
