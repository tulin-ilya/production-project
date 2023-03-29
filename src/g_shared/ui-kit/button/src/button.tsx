import cn from "classnames";
import { memo } from "react";

import type { TButtonProps } from "./models";
import styles from "./styles.module.css";

export const Button = memo(
    ({ className, children, view = "normal", ...props }: TButtonProps) => {
        return (
            <button
                className={cn(
                    styles["button"],
                    { [styles["not-clear"]]: view !== "clear" },
                    { [styles.clear]: view !== "clear" },
                    styles[view],
                    className
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);
