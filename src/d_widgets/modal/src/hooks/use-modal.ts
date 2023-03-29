import type { MouseEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import { ANIMATION_DELAY } from "../config";

type TUseModal = {
    onClose: () => void;
    isOpen: boolean;
};

export const useModal = ({ onClose, isOpen }: TUseModal) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
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

    return { isClosing, closeHandler, onContentClick };
};
