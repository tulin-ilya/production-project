import cn from "classnames";
import { memo } from "react";

import { TSpinnerProps } from "./models";
import styles from "./styles.module.css";

export const Spinner = memo(({ className }: TSpinnerProps) => {
    return (
        <div className={cn(className)}>
            <div className={cn(styles["lds-ring"])}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
});
