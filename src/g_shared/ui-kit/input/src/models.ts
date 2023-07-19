import { TComponentBaseProps } from "@shared/configs/component-base-type";
import { InputHTMLAttributes } from "react";

type THTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value"
>;

export type TInputProps = TComponentBaseProps &
    THTMLInputProps & {
        /** Автофокус */
        autofocus?: boolean;
        /** Обработчик при введении текста */
        onChange?: (value: string) => void;
        /** Подпись */
        label?: string;
        /** Значение */
        value?: string;
    };
