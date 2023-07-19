import cn from "classnames";
import type { PropsWithChildren } from "react";
import { memo } from "react";

import { useModal } from "./hooks/use-modal";
import { TModalProps } from "./models";
import styles from "./styles.module.scss";

export const Modal = memo(
    ({
        className,
        children,
        isOpen,
        onClose,
        lazy,
    }: PropsWithChildren<TModalProps>) => {
        const { closeHandler, isClosing, onContentClick } = useModal({
            onClose,
            isOpen,
            lazy,
        });

        if (lazy && !isOpen) {
            return null;
        }

        return (
            <div
                className={cn(
                    styles["modal"],
                    { [styles.opened]: isOpen },
                    { [styles["is-closing"]]: isClosing },
                    className
                )}
            >
                <div className={cn(styles.overlay)} onClick={closeHandler}>
                    <div
                        className={cn(styles.content)}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
);
