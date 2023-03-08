import {
    CLEAR,
    INVERTED_NORMAL,
    INVERTED_PRIMARY,
    INVERTED_SECONDARY,
    NORMAL,
    PRIMARY,
    SECONDARY,
} from "@shared/configs/components-view";

export type TView =
    | typeof CLEAR
    | typeof INVERTED_NORMAL
    | typeof INVERTED_PRIMARY
    | typeof INVERTED_SECONDARY
    | typeof NORMAL
    | typeof PRIMARY
    | typeof SECONDARY;

export type TComponentBaseProps = {
    /** Для margin и padding */
    className?: string;
    /** Вид */
    view?: TView;
};
