import { TWidgetBaseProps } from "@shared/configs/widget-base-type";

export type TLoginFormProps = TWidgetBaseProps & {
    /** Обработчик при успешной авторизации */
    onSuccess?: () => void;
};
