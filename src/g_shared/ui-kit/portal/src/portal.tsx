import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import type { TPortalProps } from "./models";

export const Portal = ({
    children,
    container = document.body,
}: PropsWithChildren<TPortalProps>) => {
    return createPortal(children, container);
};
