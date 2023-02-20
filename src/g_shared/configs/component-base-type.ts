import {
    CLEAR,
    INVERTED_PRIMARY,
    INVERTED_SECONDARY,
    PRIMARY,
    SECONDARY,
} from "@shared/configs/components-view";

export type TView =
    | typeof CLEAR
    | typeof PRIMARY
    | typeof SECONDARY
    | typeof INVERTED_PRIMARY
    | typeof INVERTED_SECONDARY;

export type TComponentBaseProps = {
    /** Для margin и padding */
    className?: string;
    /** Вид */
    view?: TView;
};
