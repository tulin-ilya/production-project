import cn from "classnames";
import { memo } from "react";

import { TComponentNameProps } from "./models";
import styles from "./styles.module.css";
// @ts-ignore
export const ComponentName = memo(({ className }: TComponentNameProps) => {
    return <div className={cn(styles["component-name"], className)}></div>;
});
