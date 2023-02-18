import {
    INVERTED_PRIMARY,
    INVERTED_SECONDARY,
    PRIMARY,
    SECONDARY,
} from "@shared/configs/components-view";

export type TView =
    | typeof PRIMARY
    | typeof SECONDARY
    | typeof INVERTED_PRIMARY
    | typeof INVERTED_SECONDARY;

export type TWidgetBaseProps = {
    /** Для margin и padding */
    className?: string;
    /** Вид */
    view?: TView;
};
