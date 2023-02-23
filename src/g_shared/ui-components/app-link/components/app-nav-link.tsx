import type { FC } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import { TAppLink } from "./models";
import styles from "./styles.module.css";

export const AppLink: FC<TAppLink> = ({ className, children, ...props }) => {
    return (
        <>
            <div className={cn(className)}>
                <Link className={styles["app-navlink"]} {...props}>
                    {children}
                </Link>
            </div>
        </>
    );
};
