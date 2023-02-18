import { memo } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import { TAppLink } from "./models";
import styles from "./styles.module.css";

export const AppLink = memo<TAppLink>(
    ({ className, children, view = "primary", ...props }) => {
        return (
            <div className={cn(className)}>
                <Link className={cn(styles.link, styles[view])} {...props}>
                    {children}
                </Link>
            </div>
        );
    }
);
