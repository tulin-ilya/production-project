import { TComponentBaseProps } from "@shared/configs/component-base-type";
import { ReactNode } from "react";

export const TAGS = [
    /* Текст */
    "p",
    /* SEO */
    "span",
    "div",
    /* Заголовки */
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    /* Формы */
    "label",
    /* SVG */
    "text",
    /* Жирность */
    "strong",
] as const;

export type TTag = typeof TAGS[number];

export type TTextAlign = "right" | "left" | "center";

export type TTextProps = Omit<TComponentBaseProps, "size"> & {
    align?: TTextAlign;
    Tag?: TTag;
    children: ReactNode;
};
