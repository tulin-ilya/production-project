import cn from "classnames";
import { memo } from "react";

import { TPortalProps } from "./models";
import styles from "./styles.module.css";

export const Portal = memo(({ className }: TPortalProps) => {
    return <div className={cn(styles["portal"], className)}></div>;
});
