import cn from "classnames";
import { memo } from "react";

import type { TButtonProps } from "./models";
import styles from "./styles.module.css";

export const Button = memo(
    ({ className, children, ...props }: TButtonProps) => {
        return (
            <button className={cn(styles["button"], className)} {...props}>
                {children}
            </button>
        );
    }
);
