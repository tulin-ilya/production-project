import cn from "classnames";
import { memo } from "react";

import { TUserProps } from "./models";
import styles from "./styles.module.css";

export const User = memo(({ className }: TUserProps) => {
    return <div className={cn(styles["user"], className)}></div>;
});
