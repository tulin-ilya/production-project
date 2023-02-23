import cn from "classnames";
import { memo, useEffect, useRef, useState } from "react";

import { TSidebarProps } from "./models";
import styles from "./styles.module.css";

export const Sidebar = memo(
    ({ className, view = "secondary", upperOffset }: TSidebarProps) => {
        const sidebarRef = useRef<HTMLDivElement>();
        const [height, setHeight] = useState<number>();
        const [collapsed, setCollapsed] = useState(false);

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
