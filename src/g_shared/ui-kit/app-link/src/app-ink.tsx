import cn from "classnames";
import { memo } from "react";
import { Link } from "react-router-dom";

import { TAppLink } from "./models";
import styles from "./styles.module.css";

export const AppLink = memo(
    ({ className, children, view = "primary", ...props }: TAppLink) => {
        return (
            <div className={cn(className)}>
                <Link className={cn(styles.link, styles[view])} {...props}>
                    {children}
                </Link>
            </div>
        );
    }
);
