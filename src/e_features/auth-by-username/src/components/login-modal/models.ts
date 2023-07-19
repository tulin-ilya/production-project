import { TComponentBaseProps } from "@shared/configs/component-base-type";

export type TLoginModalProps = TComponentBaseProps & {
    /** Открыто ли модальное окно */
    isOpen: boolean;
    /** Обработчик во время закрытия модального окна */
    onClose?: () => void;
};
