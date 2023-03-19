import { TComponentBaseProps } from "@shared/configs/component-base-type";

export type TIconProps = TComponentBaseProps & {
    direction?: "right" | "left" | "up" | "down";
};
