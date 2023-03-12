import {
    CLEAR,
    NORMAL,
    PRIMARY,
    SECONDARY,
} from "@shared/configs/components-view";

export type TView =
    | typeof CLEAR
    | typeof NORMAL
    | typeof PRIMARY
    | typeof SECONDARY;

export type TComponentBaseProps = {
    /** Для margin и padding */
    className?: string;
    /** Вид */
    view?: TView;
};
