import { TWidgetBaseProps } from "@shared/configs/widget-base-type";

export type TModalProps = TWidgetBaseProps & {
    isOpen?: boolean;
    onClose?: () => void;
};
