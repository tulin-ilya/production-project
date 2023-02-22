import cn from "classnames";
import { memo, useEffect, useRef, useState } from "react";

import { TSidebarProps } from "./models";
import styles from "./styles.module.css";

export const Sidebar = memo<TSidebarProps>(
    ({ className, view = "secondary", upperOffset }) => {
        const sidebarRef = useRef<HTMLDivElement>();
        const [height, setHeight] = useState<number>();
        const [collapsed, setCollapsed] = useState(false);
        // const { clientHeight } = document.documentElement;

        useEffect(() => {
            if (upperOffset)
                setHeight(sidebarRef.current.clientHeight - upperOffset);
        }, [upperOffset, sidebarRef.current?.clientHeight]);

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
                style={{ height }}
            >
                <button onClick={onToggle}>toggle</button>
            </div>
        );
    }
);
