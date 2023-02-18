import { memo } from "react";
import cn from "classnames";

import { AppLink } from "@shared/ui-components/app-link";

import { TNavbarProps } from "./models";
import styles from "./styles.module.css";

export const Navbar = memo<TNavbarProps>(
    ({ className, view = "secondary" }) => {
        return (
            <div className={cn(styles.navbar, styles[view], className)}>
                <div></div>
                <div className={cn(styles["links-container"])}>
                    <AppLink view="secondary" to={"/"}>
                        Home
                    </AppLink>
                    <AppLink view="secondary" to={"/about"}>
                        About
                    </AppLink>
                </div>
            </div>
        );
    }
);
