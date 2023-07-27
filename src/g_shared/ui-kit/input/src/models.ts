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
        // eslint-disable-next-line no-unused-vars
        onChange?: (value: string) => void;
        /** Подпись */
        label?: string;
        /** Значение */
        value?: string;
    };
