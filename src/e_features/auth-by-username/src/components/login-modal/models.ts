import { TEntitieBaseProps } from "@shared/configs/entitie-base-type";

export type TLoginModalProps = TEntitieBaseProps & {
    /** Открыто ли модальное окно */
    isOpen: boolean;
    /** Обработчик во время закрытия модального окна */
    onClose?: () => void;
};
