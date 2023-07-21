import {
    CLEAR,
    DANGER,
    NORMAL,
    PRIMARY,
    SECONDARY,
    WARNING,
} from "@shared/configs/components-view";

export type TView =
    | typeof CLEAR
    | typeof DANGER
    | typeof NORMAL
    | typeof PRIMARY
    | typeof SECONDARY
    | typeof WARNING;

export type TComponentBaseProps = {
    /** Для margin и padding */
    className?: string;
    /** Вид */
    view?: TView;
};
