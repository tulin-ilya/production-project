import { Spinner } from "@shared/ui-kit/spinner";
import cn from "classnames";
import { memo } from "react";

import { TPageLoaderProps } from "./models";
import styles from "./styles.module.css";

export const PageLoader = memo(({ className }: TPageLoaderProps) => {
    return (
        <div className={cn(styles["page-loader"], className)}>
            <Spinner />
        </div>
    );
});
