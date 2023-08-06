import { Text } from "@shared/ui-kit/text";
import cn from "classnames";
import { ChangeEvent, memo, useCallback, useMemo } from "react";

import { TSelectProps } from "./models";
import styles from "./styles.module.scss";

export const Select = memo(
    ({
        className,
        options,
        label,
        view = "normal",
        readonly,
        onChange,
        value,
        ...props
    }: TSelectProps) => {
        const onChangeHandler = useCallback(
            (e: ChangeEvent<HTMLSelectElement>) => {
                onChange?.(e.target.value);
            },
            [onChange]
        );

        const optionsList = useMemo(() => {
            return (
                <>
                    {options.map((item) => (
                        <option
                            className={cn(styles["option"])}
                            key={item.value}
                            value={item.value}
                        >
                            {item.name}
                        </option>
                    ))}
                </>
            );
        }, [options]);

        return (
            <Text
                Tag="label"
                view={view}
                className={cn(styles.label, className)}
            >
                {label}
                <select
                    {...props}
                    className={cn(
                        styles["select"],
                        {
                            [styles[view]]: readonly,
                        },
                        {
                            [styles["primary"]]: !readonly,
                        }
                    )}
                    disabled={readonly}
                    value={value}
                    onChange={onChangeHandler}
                >
                    {optionsList}
                </select>
            </Text>
        );
    }
);
