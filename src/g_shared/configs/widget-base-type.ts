import { PRIMARY, SECONDARY } from "@shared/configs/components-view";

export type TView = typeof PRIMARY | typeof SECONDARY;

export type TWidgetBaseProps = {
    /** Для margin и padding */
    className?: string;
    /** Вид */
    view?: TView;
};
