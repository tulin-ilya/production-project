import { TComponentBaseProps } from "@shared/configs/component-base-type";
import { SelectHTMLAttributes } from "react";

export type TSelectOption = {
    value: string;
    name: string;
};

type THTMLSelectProps = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "onChange" | "value" | "readOnly"
>;

export type TSelectProps = Omit<TComponentBaseProps, "size"> &
    THTMLSelectProps & {
        /** Подпись */
        label?: string;
        /** Опции селекта */
        options: TSelectOption[];
        /** Режим только для чтения */
        readonly?: boolean;
        /** Выбранная опция */
        value?: string;
        /** Обработчик при выборе опции */
        // eslint-disable-next-line no-unused-vars
        onChange?: (value: string) => void;
    };
