import cn from "classnames";
import { memo } from "react";

import { TButtonProps } from "./models";
import styles from "./styles.module.css";

export const Button = memo<TButtonProps>(
    ({ className, children, ...props }) => {
        return (
            <button className={cn(styles["button"], className)} {...props}>
                {children}
            </button>
        );
    }
);
