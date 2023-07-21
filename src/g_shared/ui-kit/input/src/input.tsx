import { Text } from "@shared/ui-kit/text";
import cn from "classnames";
import type { ChangeEvent } from "react";
import { memo, useEffect, useRef } from "react";

import type { TInputProps } from "./models";
import styles from "./styles.module.scss";

export const Input = memo(
    ({
        autofocus = false,
        className,
        onChange,
        value,
        type = "text",
        label,
        view = "normal",
        ...props
    }: TInputProps) => {
        const inputRef = useRef<HTMLInputElement>(null);

        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value);
        };

        useEffect(() => {
            if (autofocus) {
                inputRef.current?.focus();
            }
        }, [autofocus]);

        return (
            <Text
                Tag="label"
                view={view}
                className={cn(styles.label, className)}
            >
                {label}
                <input
                    {...props}
                    ref={inputRef}
                    type={type}
                    className={cn(styles["input"], styles[view])}
                    onChange={onChangeHandler}
                    value={value}
                ></input>
            </Text>
        );
    }
);
