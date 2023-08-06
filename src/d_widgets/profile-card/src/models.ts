/* eslint-disable no-unused-vars */
import { TProfile } from "@entities/profile";
import { TWidgetBaseProps } from "@shared/configs/widget-base-type";
import { TSelectOption } from "@shared/ui-kit/select";

export type TProfileFieldName = keyof TProfile;

export type TProfileCardProps = TWidgetBaseProps & {
    /** Список стран */
    countriesList?: TSelectOption[];
    /** Список валюты */
    currenciesList?: TSelectOption[];
    /** Данные профиля */
    data?: TProfile;
    /** Состояние загрузки данных */
    isLoading: boolean;
    /** Ошибка загрузки */
    error?: string;
    /** Режим редактирования */
    readonly: boolean;
    /** Обработчик полей ввода */
    onChange?: (fieldName: TProfileFieldName, value?: string) => void;
};
