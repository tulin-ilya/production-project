import type { TComponentBaseProps } from "@shared/configs/component-base-type";

export type TSidebarLinkProps = TComponentBaseProps & {
    /** Компактный вид */
    collapsed?: boolean;
    /** Иконка */
    icon?: JSX.Element;
    /** Путь для ссылки */
    path: string;
    /** Текст ссылки */
    label: string;
};
