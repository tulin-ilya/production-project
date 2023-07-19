import cn from "classnames";
import type { ChangeEvent } from "react";
import { memo, useEffect, useRef } from "react";

import type { TInputProps } from "./models";
import styles from "./styles.module.css";

export const Input = memo(
    ({
        autofocus = false,
        className,
        onChange,
        value,
        type = "text",
        label,
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
            <label className={cn(styles.label, className)}>
                {label}
                <input
                    {...props}
                    ref={inputRef}
                    type={type}
                    className={cn(styles["input"])}
                    onChange={onChangeHandler}
                    value={value}
                ></input>
            </label>
        );
    }
);
