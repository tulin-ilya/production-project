import { TComponentBaseProps } from "@shared/configs/component-base-type";
import { InputHTMLAttributes } from "react";

type THTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value" | "readOnly"
>;

export type TInputProps = Omit<TComponentBaseProps, "size"> &
    THTMLInputProps & {
        /** Автофокус */
        autofocus?: boolean;
        /** Обработчик при вводе текста */
        // eslint-disable-next-line no-unused-vars
        onChange?: (value: string) => void;
        /** Подпись */
        label?: string;
        /** Значение инпута */
        value?: string;
        /** Только для чтения */
        readonly?: boolean;
    };
