import cn from "classnames";
import { memo } from "react";

import { TTextProps } from "./models";
import styles from "./styles.module.scss";

export const Text = memo(
    ({
        align = "left",
        className,
        Tag = "p",
        view = "normal",
        children,
    }: TTextProps) => {
        return (
            <Tag
                className={cn(
                    styles["text"],
                    styles[align],
                    styles[view],
                    className
                )}
            >
                {children}
            </Tag>
        );
    }
);
