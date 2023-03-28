import cn from "classnames";
import type { MouseEvent, PropsWithChildren } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { memo } from "react";

import { TModalProps } from "./models";
import styles from "./styles.module.scss";

export const Modal = memo(
    ({
        className,
        children,
        isOpen,
        onClose,
    }: PropsWithChildren<TModalProps>) => {
        const [isClosing, setIsClosing] = useState(false);
        const timerRef = useRef<ReturnType<typeof setTimeout>>();

        const closeHandler = useCallback(() => {
            if (onClose) {
                setIsClosing(true);
                timerRef.current = setTimeout(() => {
                    onClose();
                    setIsClosing(false);
                }, 300);
            }
        }, [onClose, setIsClosing, timerRef]);

        const onContentClick = useCallback((event: MouseEvent) => {
            event.stopPropagation();
        }, []);

        const onKeyDown = useCallback(
            (event: globalThis.KeyboardEvent) => {
                if (event.key === "Escape") {
                    closeHandler();
                }
            },
            [closeHandler]
        );

        useEffect(() => {
            return () => {
                if (isOpen) {
                    window.addEventListener("keydown", onKeyDown);
                }
                clearTimeout(timerRef.current);
                window.removeEventListener("keydown", onKeyDown);
            };
        }, [onKeyDown, isOpen]);

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
